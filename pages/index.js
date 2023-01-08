import React, { useState, useEffect, useRef } from 'react'
import { urlFor, sanityClient } from '../sanity'

import HomeHeader from "../components/HomeHeader"
import Header from "../components/Header"
import Connect from "../components/Connect"
import Connect2 from "../components/Connect2"
import dynamic from "next/dynamic";

const  BubbleRegion = dynamic(() => import('../components/Bubble1'), { ssr: false })
const  BubbleTime = dynamic(() => import('../components/Bubble2'), { ssr: false })
const  BubbleTopic = dynamic(() => import('../components/Bubble3'), { ssr: false })
const  BubbleType = dynamic(() => import('../components/Bubble4'), { ssr: false })

import Image from 'next/image'
import Feedbacksticker from "../components/Feedbacksticker";



const HomePage = ({ properties}) => {
    // Random Tag Scripts

  // Random Region

  var randomTag1 = [
    '<div><a href="/fullindex?location=Albany">Albany</a></div>',
    '<div><a href="/fullindex?location=Arizona">Arizona</a></div>',
    '<div><a href="/fullindex?location=Birmingham">Birmingham</a></div>',
    '<div><a href="/fullindex?location=Chicago">Chicago</a></div>',
    '<div><a href="/fullindex?location=Cuba">Cuba</a></div>',
    '<div><a href="/fullindex?location=DC">DC</a></div>',
    '<div><a href="/fullindex?location=Detroit">Detroit</a></div>',
    '<div><a href="/fullindex?location=Florida">Florida</a></div>'


  ]
  const out = []
  const elements = 2

  for (let i = 0; i < elements; i++) {
    out.push(randomTag1.splice(Math.floor(Math.random() * randomTag1.length), 1))
  }

  // Random Time

  var randomTag2 = [
    '<div><a href="/category/1960s">1960s</a></div>',
    '<div><a href="/category/1970s">1970s</a></div>',
    '<div><a href="/category/1980s">1980s</a></div>',
    '<div><a href="/category/1990s">1990s</a></div>',
    '<div><a href="/category/2000s">2000s</a></div>'
  ]

  var randomFact2 = Math.floor(Math.random() * randomTag2.length);

  // Random Topic


  var randomTag3 = [
    '<div><a href="/category/Storme-DeLarverie">Storme DeLarverie</a></div>',
    '<div><a href="/category/Cockettes">Cockettes</a></div>',
    '<div><a href="/category/Power-Exchange">Power Exchange</a></div>'
  ]
  var randomFact3 = Math.floor(Math.random() * randomTag3.length);

  // Random Medium


  var randomTag4 = [
    '<div><a href="/category/book">Book</a></div>',
    '<div><a href="/category/flyer">Flyer</a></div>',
    '<div><a href="/category/Newspaper">Newspaper</a></div>',
    '<div><a href="/category/Photo">Photo</a></div>'
  ]
  var randomFact4 = Math.floor(Math.random() * randomTag4.length);

  var randomHex = [
    '#AEC9F1',
    '#EBE2B3',
    '#FBE1EB',
    '#F5BB89'
  ]

  var randomColor;

  function getRandom(min, max) {
    const floatRandom = Math.random()
  
    const difference = max - min
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)
  
    const randomWithinRange = random + min
  
    return randomWithinRange
  }



  // React State

  function shuffleArray ( array ) {
    var counter = array.length, temp, index;
    // While there are elements in the array
    while ( counter > 0 ) {
        // Pick a random index
        index = Math.floor( Math.random() * counter );

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[ counter ];
        array[ counter ] = array[ index ];
        array[ index ] = temp;
    }
    return array;
}




const regionproperties =  properties.filter(function(record) {
    return record.group == "Region";
  });

  const timeproperties =  properties.filter(function(record) {
    return record.group == "Time";
  });

  const topicproperties =  properties.filter(function(record) {
    return record.group == "Topic";
  });

  const typeproperties =  properties.filter(function(record) {
    return record.group == "Type";
  });

  // location
  const randomNumber4 = getRandom(0, 34);
// time
  const randomNumber3 = getRandom(0, 3);
// type
  const randomNumber2 = getRandom(0, 3);
// topic
  const randomNumber5 = getRandom(0, 2);


  const record= regionproperties[randomNumber4];
  const timerecord= timeproperties[randomNumber3];
  const topicrecord= topicproperties[randomNumber5];
  const typerecord= typeproperties[randomNumber2];
console.log(topicrecord.title)

// const bubble = document.getElementById('bubble');

// const third = document.querySelector('#bubble :nth-child(1)');
// console.log(third); 




  return (
    <>
 <div className="homePage" >

      <Header />
      <Feedbacksticker />
      <div className="sayhi hvr-bob"><Image src="/Sayhi.png" width="250" height="125" /></div>

      <div className="homepagebg" >


        <div className="cloud" style={{ backgroundColor: randomHex[randomNumber3] }}>

        <div className="bubbles">
<BubbleRegion title={record.title} image={record.image}  indexslug={record.indexslug}/>
<BubbleTime title={timerecord.title} image={timerecord.image} indexslug={timerecord.indexslug}/>
<BubbleTopic  title={topicrecord.title} image={topicrecord.image}/>
<BubbleType title={typerecord.title} image={typerecord.image}/>


                    </div>

          <div className="tag-gr">

            <div
              suppressHydrationWarning className="tag region" dangerouslySetInnerHTML={{ __html: out[0] }}
            />
            <div
              suppressHydrationWarning className="tag time" dangerouslySetInnerHTML={{ __html: randomTag2[randomFact2] }}
            />
            <div
              suppressHydrationWarning className="tag topic" dangerouslySetInnerHTML={{ __html: randomTag3[randomFact3] }}
            />

            <div
              suppressHydrationWarning className="tag type" dangerouslySetInnerHTML={{ __html: randomTag4[randomFact4] }}
            />

            <div className="tag">...</div>

          </div>
        </div>



      </div>
      </div>



      </>

  )
  

}

export const getStaticProps = async () => {


  const query = `*[_type=="homepage"]`
  const properties = await sanityClient.fetch(query)


  if (!properties) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        properties,
      },
    }
  }
}




export default HomePage
