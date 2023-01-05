/**
 * @jest-environment jsdom
 */

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Exit from '../public/Xmark.svg';
import Connect from "../components/Connect"
import Head from 'next/head'

import { sanityClient,  urlFor } from '../sanity'
import PortableText from '@sanity/block-content-to-react'
import Header from "../components/Header"
import FilterHeader from "../components/FilterHeader"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Arrow from '../public/Arrowdown.svg';
import Missing from '../public/Missingcard.png';
import Footer from "../components/Footer"
import { useRouter } from 'next/router'

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
 keyStr.charAt(e1 >> 2) +
 keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
 keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
 keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
 `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
 }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

 function fullindex(q, properties) {
    const router = useRouter();
  
    const { location, decade, topic, type } = router.query;
  
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

    const [isOpen, setIsOpen] = React.useState(false)
    const [isActive, setIsActive] = useState(false);
    const [isUp, setIsUp] = useState(false);
    const [isDown, setIsDown] = useState(false);


    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
        setIsActive(current => !current);
    }

    const slideUp = () => {
        setIsUp(current => !current);
    }


    const slideDown = () => {
        setIsDown(current => !current);
    }
    return (
        <>
        
        <div className={`indexPage ${isActive ? "fixed" : "normal"}`} >
    
    <div className="filterscontainer">
    <Drawer
open={isOpen}
onClose={toggleDrawer}
direction='bottom'
className='bla bla bla'
>

<div className="columnContainers">
    <div className="col1a">
        <div className="heading">Location</div>
        <div className="list region">
        <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, location: 'Pacific Northwest' },
          });
          toggleDrawer();
        }}
      >
        Pacific Northwest
      </button>
      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, location: 'San Fransisco' },
          })
          toggleDrawer();
        }}
      >
        San Fransisco
      </button>
      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, decade: '1960s' },
          })
          toggleDrawer();
        }}
      >
        1960s
      </button>

      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, type: 'Flyer' },
          })          
          toggleDrawer();
        }}
      >
        Flyer
      </button>

      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, type: 'Book' },
          })
          toggleDrawer();
        }}
      >
        Book
      </button>
            <a href="/category/midwest">Midwest</a>
            <a href="/category/NYC">NYC</a>
            <a href="/category/pacific-northwest">Pacific Northwest</a>
            <a href="/category/san-francisco">San Francisco</a>
            <a href="/category/south">South</a>
        </div>
        <div className="heading">Decade</div>
        <div className="list time">
            <a href="/category/1960s">1960s</a>
            <a href="/category/1970s">1970s</a>
            <a href="/category/1980s">1980s</a>
            <a href="/category/1990s">1990s</a>
            <a href="/category/2000s">2000s</a>
        </div>
    </div>

    <div className="col2a">
    <div className="heading">Topic</div>
        <div className="list topic">
            <a href="/category/storm-delarverie">Storm DeLarverie</a>
            <a href="/category/NYC">Cockettes</a>
            <a href="/category/pacific-northwest">Power Exchange</a>
            <a href="/category/sissy-spaceout">Sissy Spaceout</a>

        </div>
    </div>

    <div className="col3a">
    <div className="heading">Type</div>
        <div className="list type">
            <a href="/category/book">Book</a>
            <a href="/category/flyer">Flyer</a>
            <a href="/category/newspaper">Newspaper</a>
            <a href="/category/photo">Photo</a>


        </div>
    </div>
</div>
</Drawer>
<div className="headercontainer">
<Connect />

<Head>
        <title>Gender Network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
<header>
        <h1 className="link"><Link href="/">Gender Network</Link></h1>
        <nav>
            <div className="gr1"><Link href="/fullindex"><div className="linkgroup lt"><div className="checkbox"> <span>[</span> <span className="selected1"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>Full Index</div></Link>
            <Link href="/stories"><div className="linkgroup rt"><div className="checkbox"> <span>[</span> <span className="selected2"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>Stories</div></Link>
            </div>
            <div className="gr2">
            <Link href="/about"><div className="linkgroup lt"><div className="checkbox"> <span>[</span> <span className="selected3"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>About</div></Link>
            <Link href="/events"><div className="linkgroup rt"><div className="checkbox"> <span>[</span> <span className="selected4"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>Events</div></Link>
            </div>
        </nav>
       </header>  
<div className="filterheaders">
       <button id="button" className={`${isActive ? "minus" : "add"}`}
       style={{
        backgroundColor: isActive ? '#efd673' : '',
        color: isActive ? 'black' : '',
  
      }}
      onClick={toggleDrawer} onMouseEnter={slideUp} onMouseExit={slideDown}>Click to Filter</button>

        <div className="b2">Random ⟳</div>
        <button
        className="b3"
        type="button"
        onClick={() => {
          router.push({
            pathname: '/full2'
          });
        }}
      >
        Reset
      </button>

       </div>       </div></div>

       <>
       <div className=" workGrid buttoncontainer">
       {location && <div id="locationbtn"
       onClick={() => {
        delete router.query.location;
        router.push(router);
        remove_textlocation();
      }}>
        <button>{location}</button></div> }

        {decade && <div id="timebtn"
       onClick={() => {
        delete router.query.decade;
        router.push(router);
        remove_texttime();
      }}>
        <button>{decade}</button></div> }

        {topic && <div id="catbtn"
       onClick={() => {
        delete router.query.topic;
        router.push(router);
        remove_textcat();
      }}>
        <button>{topic}</button></div> }

        {type && <div id="typebtn"
       onClick={() => {
        delete router.query.type;
        router.push(router);
        remove_textcat();
      }}>
        <button>{type}</button></div> }
        





      </div>
      <ResponsiveMasonry className="workGridx"
                columnsCountBreakPoints={{350: 1, 700:2, 900: 3}}
            >
                <Masonry columnsCount={3} gutter="35px"> 

      {q.properties.map(({ _id, slug = '', coverphoto = '', title= '' }) => (
                //  <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}>

                 <div className="workCard" >
      <div className="workContainer">
      {coverphoto && <Image src={coverphoto} loading="lazy" placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="0" height="0" 
                    sizes="(max-width: 700) 98vw,
                    (max-width: 900) 48vw,
                    31vw" unoptimized style={{ width: '31vw', height: 'auto' }} /> }

        </div>
                  {title}
      
                 </div>
                //  </Link>
      ))}

</Masonry>
         </ResponsiveMasonry>
    </>







<div className="drawerpreview" onClick={toggleDrawer}  style={{
        transform: isUp ? 'scaleY(1)' : '',
      }}></div>
<Footer />
  </div>
        
        
        </>
    )}

    export async function getServerSideProps(context) {
        var location
        var decade
        var topic
        var type
      
      location = context.query["location"];
        decade = context.query["decade"];
        topic = context.query["topic"];
        type = context.query["type"];

      
      
        // const query = `*[_type=="work"] | order(title asc) `
        // const q = `*[_type=="work" && '${decade}' in decades] | order(title asc) `
        var q
        q = `*[_type=="work"]{slug[]->, coverphoto, title} | order(title asc) `
      
      
        if (location && decade && topic && type) {
          q = `*[_type=="work" && '${location}' in locations && '${decade}' in decades && '${topic}' in categories && '${type}' in types]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (location && decade && topic && !type) {
          q = `*[_type=="work" && '${location}' in locations && '${decade}' in decades && '${topic}' in categories]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (location && decade && !topic && !type) {
          q = `*[_type=="work" && '${location}' in locations && '${decade}' in decades]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (location && topic && !decade && !type) {
          q = `*[_type=="work" && '${location}' in locations && '${topic}' in categories]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (decade && topic && !location && !type) {
          q = `*[_type=="work" && '${decade}' in decades && '${topic}' in categories]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (location && type && !decade && !topic) {
          q = `*[_type=="work" && '${location}' in locations && '${type}' in types]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (decade) {
          q = `*[_type=="work" && '${decade}' in decades]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (topic) {
          q = `*[_type=="work" && '${topic}' in  categories]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (location) {
          q = `*[_type=="work" && '${location}' in  locations]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else if (type) {
          q = `*[_type=="work" && '${type}' in  types]{slug[]->, coverphoto, title} | order(title asc) `
        }
        else {
          q =`*[_type=="work"]{slug[]->, coverphoto, title} | order(title asc) `
        }
        // const q = `*[count((categories)[@ in '${tag}']) == 2] | order(title asc) `
        const properties = await sanityClient.fetch(q)
      
        if (!properties.length) {
          return {
            props: {
              properties: [],
            },
          }
        } else {
          return {
            props: {
              properties,
            },
          }
        }
      }
      
      
      export default fullindex