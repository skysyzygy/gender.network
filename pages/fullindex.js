/**
 * @jest-environment jsdom
 */

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Customhead from "../components/Customhead";
import Exit from "../public/Xmark.svg";


import { useRouter } from "next/router";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../components/Footer";
import Missing from "../public/Missingcard.png";
import { sanityClient } from "../sanity";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

function fullindex(q, properties, globalproperties, locationproperties, decadeproperties, tagproperties, typesproperties) {
  const router = useRouter();

  const { location, locationtitle, decade, decadetitle, topic, topictitle, type, typetitle } = router.query;

  function change_textlocation(variable) {
    document.getElementById("locationbtn").innerHTML = variable;
  }

 function remove_textlocation() {
     document.getElementById("locationbtn").innerHTML = "";
   }

  function change_texttime(variable) {
    document.getElementById("timebtn").innerHTML = variable;
  }

  function remove_texttime() {
    document.getElementById("timebtn").innerHTML = "";
  }

  function change_textcat(variable) {
    document.getElementById("catbtn").innerHTML = variable;
  }

  function remove_textcat() {
    document.getElementById("catbtn").innerHTML = "";
  }

  function change_texttype(variable) {
    document.getElementById("typebtn").innerHTML = variable;
  }

  function remove_texttype() {
    document.getElementById("typebtn").innerHTML = "";
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    setIsActive((current) => !current);
  };

  const slideUp = () => {
    setIsUp((current) => !current);
  };

  const slideDown = () => {
    setIsDown((current) => !current);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [show2, setShow2] = useState(false);
  const toggleDrawer2 = () => {
    setIsOpen2((prevState) => !prevState);
    setActive2(!isActive);
  };

  return (
    <>
      <div className={`indexPage ${isActive ? "fixed" : "normal"}`}>
        <div className="filterscontainer">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="bottom"
            className="bla bla bla"
          >
            <div className="columnContainers">
              <div className="col1a">
                <div className="heading">Location</div>
                <div className="list region">
                {q.locationproperties.map( ({
              _id,
              title = "",
              slug=""
            },
            index
          ) => (
            <div key={index}>
                    <button
                    id="locationselect"
                    type="button"
                    value={title}
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, location: `${_id}`, locationtitle:  `${title}`},
                      });
                      toggleDrawer();
                      
                    }}
                  >
                    {title}
                  </button>

            </div>
          )
        )} 

                </div>
                <div className="heading">Decade</div>
                <div className="list time">
                {q.decadeproperties.map( ({
              _id,
              title = "",
              slug=""
            },
            index
          ) => (
            <div key={index}>
                               <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, decade: `${_id}`, decadetitle:  `${title}`},
                      });
                      toggleDrawer();
                    }}
                  >
                    {title}
                  </button>
            </div>
          )
        )} 
                </div>
              </div>

              <div className="col2a">
                <div className="heading">Topic</div>
                <div className="list topic">
                {q.topicproperties.map( ({
              _id,
              title = "",
              slug=""
            },
            index
          ) => (
            <div key={index}>
                               <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, topic: `${_id}`, topictitle:  `${title}` },
                      });
                      toggleDrawer();
                    }}
                  >
                    {title}
                  </button>
            </div>
          )
        )}
                </div>
              </div>

              <div className="col3a">
                <div className="heading">Type</div>
                <div className="list type">
                {q.typesproperties.map( ({
              _id,
              title = "",
              slug=""
            },
            index
          ) => (
            <div key={index}>
                               <button
                    type="button"
                    onClick={() => {
                      router.replace({
                        query: { ...router.query, type: `${_id}`, typetitle:  `${title}` },
                      });
                      toggleDrawer();
                    }}
                  >
                    {title}
                  </button>
            </div>
          )
        )}

                  
                </div>
                <div className="hey">Hey!</div>
                <br></br>
                <Link href="/about">
                  <Image src="/contribute.png" width="395" height="286"></Image>
                </Link>
                <br></br>
                <br></br>
              </div>
            </div>
          </Drawer>
          <div className="headercontainer">
            <div>
              <Customhead />
              <div className="mobilenav">
                <button
                  className={` ${isActive2 ? "open" : null}`}
                  onClick={toggleDrawer2}
                >
                  <div className="bar-one" />
                  <div className="bar-three" />
                </button>
                <Drawer
                  open={isOpen2}
                  onClose={toggleDrawer2}
                  direction="left"
                  className="topnav"
                  overlayOpacity="0"
                  width="500px"
                >
                  <div>
                    <div className="navGroup">
                      <div>&nbsp;&nbsp;</div>
                      <div>
                        <Link href="/">Home</Link>
                      </div>
                      <div>
                        <Link href="/fullindex">Full Index</Link>
                      </div>
                      <div>
                        <Link href="/stories">Stories</Link>
                      </div>
                      <div>
                        <Link href="/about">About</Link>
                      </div>
                      <div>
                        <Link href="/events">Events</Link>
                      </div>
                      <div className="menuborderlast">&nbsp;&nbsp;</div>
                    </div>
                  </div>
                </Drawer>
              </div>
              <header>
                <div className="constraint flexbetween">
                <h1 className="link">
                  <Link href="/">Gender.Network</Link>
                </h1>
                <nav>
                  <div className="gr1">
                    <Link href="/fullindex">
                      <div className="linkgroup lt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected1">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        Full Index
                      </div>
                    </Link>
                    <Link href="/stories">
                      <div className="linkgroup rt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected2">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        Stories
                      </div>
                    </Link>
                  </div>
                  <div className="gr2">
                    <Link href="/about">
                      <div className="linkgroup lt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected3">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        About
                      </div>
                    </Link>
                    <Link href="/events">
                      <div className="linkgroup rt">
                        <div className="checkbox">
                          {" "}
                          <span>[</span>{" "}
                          <span className="selected4">
                            <Image
                              src={Exit}
                              alt="Selected"
                              width="25px"
                              height="25px"
                            />
                          </span>{" "}
                          <span>]</span>{" "}
                        </div>
                        Events
                      </div>
                    </Link>
                  </div>
                </nav>
                </div>
              </header>
            </div>
            <div className="filterheaders">
              <div className="constraint">
              <button
                id="button"
                className={`${isActive ? "minus" : "add"}`}
                style={{
                  backgroundColor: isActive ? "#2cfadb" : "",
                  color: isActive ? "black" : "",
                }}
                onClick={toggleDrawer}
                onMouseEnter={slideUp}
                onMouseExit={slideDown}
              >
                Click to Filter
              </button>

              <button
                className="b3"
                type="button"
                onClick={() => {
                  router.push({
                    pathname: "/fullindex",
                  });
                }}
              >
                Reset
              </button></div>
            </div>{" "}
          </div>
        </div>

        <>
           <div className=" workGrid buttoncontainer">


             {location && (
              <div
                id="locationbtn"
                onClick={() => {
                  delete router.query.location;
                  delete router.query.locationtitle;
                  router.push(router);
                  remove_textlocation();
                }}
              >
                <button>{locationtitle}</button>
              </div>
            )} 

            {decade && (
              <div
                id="timebtn"
                onClick={() => {
                  delete router.query.decade;
                  delete router.query.decadetitle;
                  router.push(router);
                  remove_texttime();
                }}
              >
                <button>{decadetitle}</button>
              </div>
            )} 

            {topic && (
              <div
                id="catbtn"
                onClick={() => {
                  delete router.query.topic;
                  delete router.query.topictitle;
                  router.push(router);
                  remove_textcat();
                }}
              >
                <button>{topictitle}</button>
              </div>
            )}

            {type && (
              <div
                id="typebtn"
                onClick={() => {
                  delete router.query.type;
                  delete router.query.typetitle;
                  router.push(router);
                  remove_textcat();
                }}
              >
                <button>{typetitle}</button>
              </div>
            )}
          </div> 
          <ResponsiveMasonry
            className="workGridx"
            columnsCountBreakPoints={{ 350: 1, 700: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="35px">

    
              {q.properties && q.properties.map(
                ({ _id, slug = "", coverphoto = "", title = "" }) => (
                  <>
                  {slug && <Link passHref href="/work/[slug]" as={`/work/${slug}`}>
                    <div className="workCard">
                      <div className="workContainer">
                        {coverphoto && (
                          <Image
                            src={coverphoto}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                            width="0"
                            height="0"
                            sizes="(max-width: 700) 98vw,
                    (max-width: 900) 48vw,
                    31vw"
                            unoptimized
                            style={{ width: "100%", height: "auto" }}
                            alt={title}
                          />
                        )}
                      </div>
                      {title}
                    </div>
                  </Link> }
                  </>
                )
              )} 

{q.globalproperties.map(
                ({ _id, submitlink = "" }) => (
              <div className="submitMore workCard">
                <Link href={submitlink}>
                  <Image
                    src={Missing}
                    className="missing"
                    width="0"
                    height="0"
                    size="100vw"
                    unoptimized
                    style={{ width: "80%", height: "auto" }}
                  />
                </Link>
              </div>))} 
            </Masonry>
          </ResponsiveMasonry>
        </>

        <div
          className="drawerpreview"
          onClick={toggleDrawer}
          style={{
            transform: isUp ? "scaleY(1)" : "",
          }}
        ></div>
                       {q.globalproperties.map(
          (
            {
              _id,
              footertitle = "",
              footermenu = "",
              footercontact = "",
              emaillink = "",
              facebooklink = "",
              iglink=""
            },
            index
          ) => (
            <div key={index}>
              <Footer
                footertitle={footertitle}
                footermenu={footermenu}
                footercontact={footercontact}
                emaillink={emaillink}
                facebooklink={facebooklink}
                iglink={iglink}
              />
            </div>
          )
        )} 
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  var location;
  var decade;
  var topic;
  var type;

  location = context.query["location"];
  decade = context.query["decade"];
  topic = context.query["topic"];
  type = context.query["type"];


  var q;
  q = `*[_type=="work"]| order(_createdAt desc) `;


  if (location && decade && topic && type) {
    q = `*[_type=="work" && references('${location}') && references('${decade}') && references('${topic}') && references('${type}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (location && decade && topic && !type) {
    q = `*[_type=="work" && references('${location}') && references('${decade}') && references('${topic}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (location && decade && !topic && type) {
    q = `*[_type=="work" && references('${location}') && references('${decade}') && references('${type}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (location && !decade && topic && type) {
    q = `*[_type=="work" && references('${location}') && references('${topic}') && references('${type}']{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (location && decade && !topic && !type) {
    q = `*[_type=="work" && references('${location}') && references('${decade}') ]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (!location && decade && topic && type) {
    q = `*[_type=="work" && references('${decade}') && references('${topic}') && references('${type}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (!location && !decade && topic && type) {
    q = `*[_type=="work" && references('${topic}') && references('${type}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (location && topic && !decade && !type) {
    q = `*[_type=="work" && references('${location}') && references('${topic}') ]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (decade && topic && !location && !type) {
    q = `*[_type=="work" && references('${decade}') && references('${topic}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (location && type && !decade && !topic) {
    q = `*[_type=="work" && references('${location}') && references('${type}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (decade) {
    q = `*[_type=="work" && references('${decade}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (topic) {
    q = `*[_type=="work" && references('${topic}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (location) {
    q = `*[_type=="work" && references('${location}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else if (type) {
    q = `*[_type=="work" && references('${type}')]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  } else {
    q = `*[_type=="work"]{coverphoto, "slug": slug.current, title} | order(_createdAt desc) `;
  }


  // const q = `*[count((categories)[@ in '${tag}']) == 2] | order(title asc) `
  const properties = await sanityClient.fetch(q);

  const globalquery = `*[_type == "global" ]`;
  const globalproperties = await sanityClient.fetch(globalquery);

  const locationquery = `*[_type == "location" ]{_id, "slug": slug.current, title} | order(title asc) `;
  const locationproperties = await sanityClient.fetch(locationquery);

  const decadequery = `*[_type == "decade" ]{_id, "slug": slug.current, title} | order(title asc) `;
  const decadeproperties = await sanityClient.fetch(decadequery);

  const topicquery = `*[_type == "topic" ]{_id, "slug": slug.current, title} | order(title asc) `;
  const topicproperties = await sanityClient.fetch(topicquery);

  const typesquery = `*[_type == "types" ]{_id, "slug": slug.current, title} | order(title asc) `;
  const typesproperties = await sanityClient.fetch(typesquery);


  if (!globalproperties.length) {
    return {
      props: {
        properties: [],
        globalproperties: [],
        locationproperties: [],
        decadeproperties: [],
        topicproperties: [],
        typesproperties: []
      },
    };
  } else {
    return {
      props: {
        properties,
        globalproperties,
        locationproperties,
        decadeproperties,
        topicproperties,
        typesproperties
      },
    };
  }
}

export default fullindex;
