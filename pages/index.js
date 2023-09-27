import React, { useState, useEffect, useRef } from "react";
import { urlFor, sanityClient } from "../sanity";

import HomeHeader from "../components/HomeHeader";
import Header from "../components/Header";
import Connect from "../components/Connect";
import Connect2 from "../components/Connect2";
import dynamic from "next/dynamic";
import Link from "next/link";
import PortableText from "@sanity/block-content-to-react";

const BubbleRegion = dynamic(() => import("../components/Bubble1"), {
  ssr: false,
});
const BubbleTime = dynamic(() => import("../components/Bubble2"), {
  ssr: false,
});
const BubbleTopic = dynamic(() => import("../components/Bubble3"), {
  ssr: false,
});
const BubbleType = dynamic(() => import("../components/Bubble4"), {
  ssr: false,
});

import Image from "next/image";




const HomePage = ({ properties, infoproperties, globalproperties, locationproperties, decadeproperties, topicproperties, typesproperties }) => {

  var randomHex = ["#E3E36A", "#058ED9", "#AEC9F1", "#EBE2B3", "#DD4781", "#F5BB89"];


  //bg color
  var randomcolor = Math.floor(Math.random() * randomHex.length);
  // location
  var locationrandomnumber = Math.floor(Math.random() * locationproperties.length);
  var locationrandomnumber2 = Math.floor(Math.random() * locationproperties.length);
  // time
  var decaderandomnumber = Math.floor(Math.random() * decadeproperties.length);
  var decaderandomnumber2 = Math.floor(Math.random() * decadeproperties.length);
    // topic
    var topicrandomnumber = Math.floor(Math.random() * topicproperties.length);
    var topicrandomnumber2 = Math.floor(Math.random() * topicproperties.length);  
  // type
  var typerandomnumber = Math.floor(Math.random() * typesproperties.length);
  var typerandomnumber2 = Math.floor(Math.random() * typesproperties.length);

  const locationrecord = locationproperties[locationrandomnumber];
  const locationrecord2 = locationproperties[locationrandomnumber2];
  const decaderecord = decadeproperties[decaderandomnumber];
  const decaderecord2 = decadeproperties[decaderandomnumber2];
  const topicrecord = topicproperties[topicrandomnumber];
  const topicrecord2 = topicproperties[topicrandomnumber2];
  const typesrecord = typesproperties[typerandomnumber];
  const typesrecord2 = typesproperties[typerandomnumber2];


  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
    marks: {
      link: ({ mark, children }) => {
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
  };

  const buttonColor = "#" + infoproperties[0].leftbgbutton;
  const buttontextColor = "#" + infoproperties[0].lefttextbutton;

  console.log(randomHex[randomcolor])

  const mystyle = {
    color: buttontextColor,
  };


  return (
    <> <div className="homePage">
      {globalproperties && globalproperties.map(
          (
            {
              _id,
              emaillink = "",
              facebooklink = "",
              iglink=""
            },
            index
          ) => (
            <div key={_id}>
              <Header
                emaillink={emaillink && emaillink}
                facebooklink={facebooklink && facebooklink}
                iglink={iglink}
              />
            </div>
          )
        )}

        {infoproperties && infoproperties.map(
          (
            {
              _id,
              homepagefeedback = "",
              leftbgbutton = "",
              lefttextbutton = "",
              homepagesayhi =""
            },
            index
          ) => (
            <>
            <div key={_id}>
             <div className="ovalsticker hvr-pulse" style={buttonColor && { backgroundColor: buttonColor}}>
             <PortableText blocks={homepagefeedback && homepagefeedback} serializers={serializers} style={mystyle}/>
         </div>

            </div>
             <div className="sayhi hvr-bob">
          <Link href={homepagesayhi && homepagesayhi}>
             <Image src="/Sayhi.png" width="250" height="125" />
           </Link>
       </div>
            
            </>

          )
        )} 


        <div className="homepagebg">
          <div
            className="cloud"
            style={{ backgroundColor: randomHex[randomcolor] }}
          >            </div>

            <div className="bubbles">
               <BubbleRegion
                title={locationrecord.title && locationrecord.title}
                image={locationrecord.image && locationrecord.image}
                indexslug={`/fullindexnew?location=${locationrecord._id}&locationtitle=${locationrecord.title}`}        
              /> 
               <BubbleTime
                title={decaderecord.title && decaderecord.title}
                image={decaderecord.image && decaderecord.image}
                indexslug={decaderecord._id && `/fullindex?decade=${decaderecord._id}&decadetitle=${decaderecord.title}`}
              />
               <BubbleTopic
                title={topicrecord.title && topicrecord.title}
                image={topicrecord.image && topicrecord.image}
                indexslug={topicrecord._id && `/fullindex?topic=${topicrecord._id}&topictitle=${topicrecord.title}`}
              />
              <BubbleType
                title={typesrecord.title && typesrecord.title}
                image={typesrecord.image && typesrecord.image}
                indexslug={typesrecord._id && `/fullindex?type=${typesrecord._id}&typetitle=${typesrecord.title}`}
              />  

          </div>
        </div>
      </div> 
    </>
  );
};

export const getStaticProps = async () => {
  const locationquery = `*[_type == "location" && (defined(image)) ]{_id, title, image} | order(title asc) `;
  const locationproperties = await sanityClient.fetch(locationquery);

  const decadequery = `*[_type == "decade" && (defined(image)) ]{_id, title, image} | order(title asc) `;
  const decadeproperties = await sanityClient.fetch(decadequery);

  const topicquery = `*[_type == "topic" && (defined(image)) ]{_id, title, image} | order(title asc) `;
  const topicproperties = await sanityClient.fetch(topicquery);

  const typesquery = `*[_type == "types" && (defined(image)) ]{_id, title, image} | order(title asc) `;
  const typesproperties = await sanityClient.fetch(typesquery);

  const infoquery = `*[_type=="homeinfo"]`;
  const infoproperties = await sanityClient.fetch(infoquery);

  const globalquery = `*[_type=="global"]`;
  const globalproperties = await sanityClient.fetch(globalquery);

  if (!infoproperties) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        infoproperties,
        globalproperties,
        locationproperties,
        decadeproperties,
        topicproperties,
        typesproperties
      },
    };
  }
};

export default HomePage