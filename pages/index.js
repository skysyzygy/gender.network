import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../sanity";

import Header from "../components/Header";

import Bubble1 from "../components/Bubble1";
import Bubble2 from "../components/Bubble2";
import Bubble3 from "../components/Bubble3";
import Bubble4 from "../components/Bubble4";

import PortableText from "@sanity/block-content-to-react";
import dynamic from "next/dynamic";
import Link from "next/link";


const Cloudbg = dynamic(() => import("../components/Cloudbg"), {
  ssr: false,
});

import Image from "next/image";




const HomePage = ({ properties, infoproperties, globalproperties, locationproperties, decadeproperties, topicproperties, typesproperties }) => {

  const [locationrecord, setlocationrecord] = useState('');
  const [locationrecord2, setlocationrecord2] = useState('');
  const [decaderecord, setdecaderecord] = useState('');
  const [decaderecord2, setdecaderecord2] = useState('');
  const [topicrecord, settopicrecord] = useState('');
  const [topicrecord2, settopicrecord2] = useState('');
  const [typesrecord, settypesrecord] = useState('');
  const [typesrecord2, settypesrecord2] = useState('');


  useEffect(() => {
    var locationrandomnumber = Math.floor(Math.random() * locationproperties.length);
    var locationrandomnumber2 = Math.floor(Math.random() * locationproperties.length);
    var decaderandomnumber = Math.floor(Math.random() * decadeproperties.length);
    var decaderandomnumber2 = Math.floor(Math.random() * decadeproperties.length);
    var topicrandomnumber = Math.floor(Math.random() * topicproperties.length);
    var topicrandomnumber2 = Math.floor(Math.random() * topicproperties.length);
    var typerandomnumber = Math.floor(Math.random() * typesproperties.length);
    var typerandomnumber2 = Math.floor(Math.random() * typesproperties.length);

    setlocationrecord(locationproperties[locationrandomnumber]);
    setlocationrecord2(locationproperties[locationrandomnumber2]);
    setdecaderecord(decadeproperties[decaderandomnumber]);
    setdecaderecord2(decadeproperties[decaderandomnumber2]);
    settopicrecord(topicproperties[topicrandomnumber]);
    settopicrecord2(topicproperties[topicrandomnumber2]);
    settypesrecord(typesproperties[typerandomnumber]);
    settypesrecord2(typesproperties[typerandomnumber2]);

  }, []);

  var randomHex = ["#E3E36A", "#058ED9", "#AEC9F1", "#EBE2B3", "#DD4781", "#F5BB89"];


  //bg color
  var randomcolor = Math.floor(Math.random() * randomHex.length);

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

          <Cloudbg color={randomHex[randomcolor]}

          />
            <div className="bubbles" >
                <Bubble1
                title={locationrecord.title && locationrecord.title}
                image={locationrecord.image && urlFor(locationrecord.image).url()}
                indexslug={`/fullindex?location=${locationrecord._id}&locationtitle=${locationrecord.title}`}        
              /> 
               <Bubble2
                title={decaderecord.title && decaderecord.title}
                image={decaderecord.image && urlFor(decaderecord.image).url()}
                indexslug={decaderecord._id && `/fullindex?decade=${decaderecord._id}&decadetitle=${decaderecord.title}`}
              />
               <Bubble3
                title={topicrecord.title && topicrecord.title}
                image={topicrecord.image && urlFor(topicrecord.image).url()}
                indexslug={topicrecord._id && `/fullindex?topic=${topicrecord._id}&topictitle=${topicrecord.title}`}
              /> 

               <Bubble4 
                title={typesrecord.title && typesrecord.title}
                image={typesrecord.image && urlFor(typesrecord.image).url()}
                indexslug={typesrecord._id && `/fullindex?type=${typesrecord._id}&typetitle=${typesrecord.title}`}
              />   

          </div>

         <div className="tag-gr">
              <div className="constrainttags" >
                <div className="tag region">
                <Link  href={`/fullindex?location=${locationrecord2._id}&locationtitle=${locationrecord2.title}`}>
                  {locationrecord2.title}</Link>
                  </div>
                  <div className="tag time">
                  <Link  href={`/fullindex?decade=${decaderecord2._id}&decadetitle=${decaderecord2.title}`}>
                  {decaderecord2.title}</Link>
                  </div>
                  <div className="tag topic">
                  <Link  href={`/fullindex?topic=${topicrecord2._id}&topictitle=${topicrecord2.title}`}>
                  {topicrecord2.title}</Link>
                  </div>
                  <div className="tag type">
                  <Link  href={`/fullindex?type=${typesrecord2._id}&typetitle=${typesrecord2.title}`}>
                  {typesrecord2.title}</Link>
                  </div>
              <div className="tag"><Link href="/fullindex">...</Link></div>
            </div>
            </div> 
        </div>
      </div> 
    </>
  );
};

export const getServerSideProps = async () => {
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