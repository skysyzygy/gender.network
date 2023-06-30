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




const HomePage = ({ properties, infoproperties, globalproperties }) => {

  var randomHex = ["#E3E36A", "#058ED9", "#AEC9F1", "#EBE2B3", "#DD4781", "#F5BB89"];


  const regionproperties = properties.filter(function (record) {
    return record.group == "Region";
  });

  const timeproperties = properties.filter(function (record) {
    return record.group == "Time";
  });

  const topicproperties = properties.filter(function (record) {
    return record.group == "Topic";
  });

  const typeproperties = properties.filter(function (record) {
    return record.group == "Type";
  });

  //bg color
  var randomcolor = Math.floor(Math.random() * randomHex.length);
  // location
  var randomregionnumber = Math.floor(Math.random() * regionproperties.length);
  var randomregionnumber2 = Math.floor(Math.random() * regionproperties.length);
  // time
  var randomtimenumber = Math.floor(Math.random() * timeproperties.length);
  var randomtimenumber2 = Math.floor(Math.random() * timeproperties.length);
  // type
  var randomtypenumber = Math.floor(Math.random() * typeproperties.length);
  var randomtypenumber2 = Math.floor(Math.random() * typeproperties.length);
  // topic
  var randomtopicnumber = Math.floor(Math.random() * topicproperties.length);
  var randomtopicnumber2 = Math.floor(Math.random() * topicproperties.length);

  const record = regionproperties[randomregionnumber];
  const record2 = regionproperties[randomregionnumber2];
  const timerecord = timeproperties[randomtimenumber];
  const timerecord2 = timeproperties[randomtimenumber2];
  const typerecord = typeproperties[randomtypenumber];
  const typerecord2 = typeproperties[randomtypenumber2];
  const topicrecord = topicproperties[randomtopicnumber];
  const topicrecord2 = topicproperties[randomtopicnumber2];


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
        // Read https://css-tricks.com/use-target_blank/
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
          >
            <div className="bubbles">
              <BubbleRegion
                title={record.title && record.title}
                image={ record.image && record.image}
                indexslug={record.indexslug && record.indexslug}
              />
              <BubbleTime
                title={timerecord.title && timerecord.title}
                image={ timerecord.image && timerecord.image}
                indexslug={timerecord.indexslug && timerecord.indexslug}
              />
              <BubbleTopic
                title={topicrecord.title && topicrecord.title}
                image={ topicrecord.image && topicrecord.image}
                indexslug={topicrecord.indexslug && topicrecord.indexslug}
              />
              <BubbleType
                title={typerecord.title && typerecord.title}
                image={ typerecord.image && typerecord.image}
                indexslug={typerecord.indexslug && typerecord.indexslug}
              />
            </div>

            <div className="tag-gr">
              <div className="constrainttags" suppressHydrationWarning>
                <div className="tag region">
                <Link suppressHydrationWarning href={record2.indexslug}>{record2.title}</Link>
                  </div>
                  <div className="tag time">
                <Link suppressHydrationWarning href={timerecord2.indexslug}>{timerecord2.title}</Link>
                  </div>
                  <div className="tag topic">
                <Link suppressHydrationWarning href={topicrecord2.indexslug}>{topicrecord2.title}</Link>
                  </div>
                  <div className="tag type">
                <Link suppressHydrationWarning href={typerecord2.indexslug}>{typerecord2.title}</Link>
                  </div>
              <div className="tag"><Link href="https://gender.network/fullindex">...</Link></div>
            </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type=="homepage"]`;
  const properties = await sanityClient.fetch(query);

  const infoquery = `*[_type=="homeinfo"]`;
  const infoproperties = await sanityClient.fetch(infoquery);

  const globalquery = `*[_type=="global"]`;
  const globalproperties = await sanityClient.fetch(globalquery);

  if (!properties) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        properties,
        infoproperties,
        globalproperties
      },
    };
  }
};

export default HomePage