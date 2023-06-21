import React, { useState, useEffect, useRef } from 'react'
import { urlFor, sanityClient } from '../sanity'

import HomeHeader from "../components/HomeHeader"
import Header from "../components/Header"
import Connect from "../components/Connect"
import Connect2 from "../components/Connect2"
import dynamic from "next/dynamic";
import Link from 'next/link'


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
    '<div><a href="/fullindex?location=Chicago">Chicago</a></div>',
    '<div><a href="/fullindex?location=DC">DC</a></div>',
    '<div><a href="/fullindex?location=Detroit">Detroit</a></div>',
    '<div><a href="/fullindex?location=Florida">Florida</a></div>',
    '<div><a href="/fullindex?location=India">India</a></div>',
    '<div><a href="/fullindex?location=Los+Angeles">Los Angeles</a></div>',
    '<div><a href="/fullindex?location=Louisiana">Louisiana</a></div>',
    '<div><a href="/fullindex?location=Minneapolis">Minneapolis</a></div>',
    '<div><a href="/fullindex?location=New+Jersey">New Jersey</a></div>',
    '<div><a href="/fullindex?location=New+Mexico">New Mexico</a></div>',
    '<div><a href="/fullindex?location=North+Carolina">North Carolina</a></div>',
        '<div><a href="/fullindex?location=Northeast">Northeast</a></div>',
    '<div><a href="/fullindex?location=Northwest">Northwest</a></div>',
    '<div><a href="/fullindex?location=NYC">NYC</a></div>',
    '<div><a href="/fullindex?location=San+Diego">San Diego</a></div>',
    '<div><a href="/fullindex?location=San+Fransisco">San Fransisco</a></div>',
    '<div><a href="/fullindex?location=Seattle">Seattle</a></div>',
    '<div><a href="/fullindex?location=Southeast">Southeast</a></div>',
        '<div><a href="/fullindex?location=Southwest">Southwest</a></div>',

    '<div><a href="/fullindex?location=Tennessee">Tennessee</a></div>',
    '<div><a href="/fullindex?location=UK">UK</a></div>',
    '<div><a href="/fullindex?location=Washington">Washington</a></div>'
  ]
  const out = []
  const elements = 2

  for (let i = 0; i < elements; i++) {
    out.push(randomTag1.splice(Math.floor(Math.random() * randomTag1.length), 1))
  }

  // Random Time

  var randomTag2 = [
    '<div><a href="/fullindex?decade=1960s">1960s</a></div>',
    '<div><a href="/fullindex?decade=1970s">1970s</a></div>',
    '<div><a href="/fullindex?decade=1980s">1980s</a></div>',
    '<div><a href="/fullindex?decade=1990s">1990s</a></div>',
  ]

  var randomFact2 = Math.floor(Math.random() * randomTag2.length);

  // Random Topic


  var randomTag3 = [
    '<div><a href="/fullindex?topic=Ballroom">Ballroom</a></div>',
    '<div><a href="/fullindex?topic=Beth+Elliiot">Beth Elliiot</a></div>',
    '<div><a href="/fullindex?topic=Cockettes">Cockettes</a></div>',
    '<div><a href="/fullindex?topic=Effeminists">Effeminists</a></div>',
    '<div><a href="/fullindex?topic=FBI">FBI</a></div>',
    '<div><a href="/fullindex?topic=G.L.A.D.">G.L.A.D.</a></div>',
    '<div><a href="/fullindex?topic=Mo+B+Dick">Mo B Dick</a></div>',
    '<div><a href="/fullindex?topic=Tri-Ess">Tri-Ess</a></div>',
  ]
  var randomFact3 = Math.floor(Math.random() * randomTag3.length);

  // Random Medium


  var randomTag4 = [
    '<div><a href="/fullindex?type=Advertisement">Advertisement</a></div>',
    '<div><a href="/fullindex?type=Art">Art</a></div>',
    '<div><a href="/fullindex?type=Book">Book</a></div>',
    '<div><a href="/fullindex?type=Cartoon">Cartoon</a></div>',
    '<div><a href="/fullindex?type=Catalog">Catalog</a></div>',
    '<div><a href="/fullindex?type=Collage">Collage</a></div>',
    '<div><a href="/fullindex?type=Drawing">Drawing</a></div>',
    '<div><a href="/fullindex?type=Essay">Essay</a></div>',
    '<div><a href="/fullindex?type=Flyer">Flyer</a></div>',
    '<div><a href="/fullindex?type=Interview">Interview</a></div>',
    '<div><a href="/fullindex?type=Letter">Letter</a></div>',
    '<div><a href="/fullindex?type=Lyrics">Lyrics</a></div>',
    '<div><a href="/fullindex?type=Magazine">Magazine</a></div>',
    '<div><a href="/fullindex?type=Manifesto">Manifesto</a></div>',
    '<div><a href="/fullindex?type=Manuscript">Manuscript</a></div>',
    '<div><a href="/fullindex?type=Movie">Movie</a></div>',
    '<div><a href="/fullindex?type=Newsletter">Newsletter</a></div>',
    '<div><a href="/fullindex?type=Newspaper">Newspaper</a></div>',
    '<div><a href="/fullindex?type=Photo">Photo</a></div>',
    '<div><a href="/fullindex?type=Poem">Poem</a></div>',
    '<div><a href="/fullindex?type=Press+Release">Press Release</a></div>',
    '<div><a href="/fullindex?type=Program">Program</a></div>',
    '<div><a href="/fullindex?type=Reference">Reference</a></div>',
    '<div><a href="/fullindex?type=Short+Story">Short Story</a></div>',
    '<div><a href="/fullindex?type=Speech">Speech</a></div>'

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
  var randomNumber4 = Math.floor(Math.random() * regionproperties.length);
// time
var randomNumber3 = Math.floor(Math.random() * timeproperties.length);
// type
var randomNumber2 = Math.floor(Math.random() * typeproperties.length);
// topic
var randomNumber5 = Math.floor(Math.random() * topicproperties.length);


  const record= regionproperties[randomNumber4];
  const timerecord= timeproperties[randomNumber3];
  const topicrecord= topicproperties[randomNumber5];
  const typerecord= typeproperties[randomNumber2];

// const bubble = document.getElementById('bubble');

// const third = document.querySelector('#bubble :nth-child(1)');




  return (
    <>
 <div className="homePage" >

      <Header />
      <Feedbacksticker />
      <div className="sayhi hvr-bob">
      <Link href="/about" >
        <Image src="/Sayhi.png" width="250" height="125" />
        </Link></div>

      <div className="homepagebg" >


        <div className="cloud" style={{ backgroundColor: randomHex[randomNumber3] }}>

        <div className="bubbles">
<BubbleRegion title={record.title} image={record.image}  indexslug={record.indexslug}/>
<BubbleTime title={timerecord.title} image={timerecord.image} indexslug={timerecord.indexslug}/>
<BubbleTopic  title={topicrecord.title} image={topicrecord.image} indexslug={topicrecord.indexslug}/>
<BubbleType title={typerecord.title} image={typerecord.image} indexslug={typerecord.indexslug}/>


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