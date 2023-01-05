/**
 * @jest-environment jsdom
 */

 import React, { useState, useEffect } from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 import Exit from '../public/Xmark.svg';

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


 
 
 const fullindex = ({ properties }) => {

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
    console.log(properties)

    
   return (

    <div className={`indexPage ${isActive ? "fixed" : "normal"}`} >
    
    <div className="filterscontainer">
    <Drawer
open={isOpen}
onClose={toggleDrawer}
direction='bottom'
className='bla bla bla'
>
{/* <div className="arrow">
    <Image src={Arrow} className="arrow" onClick={toggleDrawer} />
    </div>
    <div className="columnHeader heading">
        Filter by:
    </div> */}
<div className="columnContainers">
    <div className="col1a">
        <div className="heading">Location</div>
        <div className="list region">
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
            {/* <a href="/category/san-francisco">San Francisco</a>
            <a href="/category/south">South</a>
            <a href="/category/1960s">1960s</a>
            <a href="/category/1970s">1970s</a>
            <a href="/category/1980s">1980s</a>
            <a href="/category/1990s">1990s</a>
            <a href="/category/2000s">2000s</a> */}
        </div>
    </div>

    <div className="col3a">
    <div className="heading">Type</div>
        <div className="list type">
            <a href="/category/book">Book</a>
            <a href="/category/flyer">Flyer</a>
            <a href="/category/newspaper">Newspaper</a>
            <a href="/category/photo">Photo</a>

            {/* <a href="/category/san-francisco">San Francisco</a>
            <a href="/category/south">South</a>
            <a href="/category/1960s">1960s</a>
            <a href="/category/1970s">1970s</a>
            <a href="/category/1980s">1980s</a>
            <a href="/category/1990s">1990s</a>
            <a href="/category/2000s">2000s</a> */}
        </div>
    </div>
</div>
</Drawer>

<FilterHeader isActive={isActive} toggleDrawer={toggleDrawer} slideUp={slideUp} slideDown={slideDown}/>
       </div>
       <ResponsiveMasonry className="workGrid"
                columnsCountBreakPoints={{350: 1, 700:2, 900: 3}}
            >
                <Masonry columnsCount={3} gutter="35px"> 
         {properties.map(({ _id, slug = '', coverphoto = '', title= '' }) => (
         <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}>

           <div className="workCard" >
<div className="workContainer">
{coverphoto && <Image src={coverphoto} loading="lazy" placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="0" height="0" 
              sizes="(max-width: 700) 98vw,
              (max-width: 900) 48vw,
              31vw" unoptimized style={{ width: '31vw', height: 'auto' }} /> }
  {/* {coverphoto2 && 
  <Image src={post.coverphoto2}  placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="width="0" height="0" size="100vw"   unoptimized  style={{ width: '31.66vw', height: 'auto' }} />

  } */}
  </div>
            {title}

           </div></Link>
         ))}
                    <div className="submitMore workCard">
                    <Image src={Missing} className="missing" width="0" height="0" size="100vw"   unoptimized  style={{ width: '31.66vw', height: 'auto' }} />

           </div>
         </Masonry>
         </ResponsiveMasonry>

<div className="drawerpreview" onClick={toggleDrawer}  style={{
        transform: isUp ? 'scaleY(1)' : '',
      }}></div>
<Footer />
  </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = `*[_type=="work"] | order(title asc) `
   const properties = await sanityClient.fetch(query)
 
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
 
 export default fullindex;