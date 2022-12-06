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
 import { LazyLoadImage } from "react-lazy-load-image-component";
 import Arrow from '../public/Arrowdown.svg';
 import Missing from '../public/Missingcard.png';
 import Footer from "../components/Footer"


 
 
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

    
   return (

    <div className={`indexPage ${isActive ? "fixed" : "normal"}`}>
    
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
            <a href="/categories/midwest">Midwest</a>
            <a href="/categories/NYC">NYC</a>
            <a href="/categories/pacific-northwest">Pacific Northwest</a>
            <a href="/categories/san-francisco">San Francisco</a>
            <a href="/categories/south">South</a>
        </div>
        <div className="heading">Decade</div>
        <div className="list time">
            <a href="/categories/1960s">1960s</a>
            <a href="/categories/1970s">1970s</a>
            <a href="/categories/1980s">1980s</a>
            <a href="/categories/1990s">1990s</a>
            <a href="/categories/2000s">2000s</a>
        </div>
    </div>

    <div className="col2a">
    <div className="heading">Topic</div>
        <div className="list topic">
            <a href="/categories/storm-delarverie">Storm DeLarverie</a>
            <a href="/categories/NYC">Cockettes</a>
            <a href="/categories/pacific-northwest">Power Exchange</a>
            <a href="/categories/sissy-spaceout">Sissy Spaceout</a>
            {/* <a href="/categories/san-francisco">San Francisco</a>
            <a href="/categories/south">South</a>
            <a href="/categories/1960s">1960s</a>
            <a href="/categories/1970s">1970s</a>
            <a href="/categories/1980s">1980s</a>
            <a href="/categories/1990s">1990s</a>
            <a href="/categories/2000s">2000s</a> */}
        </div>
    </div>

    <div className="col3a">
    <div className="heading">Type</div>
        <div className="list type">
            <a href="/categories/book">Book</a>
            <a href="/categories/flyer">Flyer</a>
            <a href="/categories/newspaper">Newspaper</a>
            <a href="/categories/photo">Photo</a>

            {/* <a href="/categories/san-francisco">San Francisco</a>
            <a href="/categories/south">South</a>
            <a href="/categories/1960s">1960s</a>
            <a href="/categories/1970s">1970s</a>
            <a href="/categories/1980s">1980s</a>
            <a href="/categories/1990s">1990s</a>
            <a href="/categories/2000s">2000s</a> */}
        </div>
    </div>
</div>
</Drawer>

<FilterHeader isActive={isActive} toggleDrawer={toggleDrawer} slideUp={slideUp} slideDown={slideDown}/>
       </div>
       <ResponsiveMasonry className="workGrid"
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry columnsCount={3} gutter="25px"> 
         {properties.map(post => (
                        <Link href="/work/sample" key={post._id}>
           <div className="workCard" >

  <LazyLoadImage src={urlFor(post.coverphoto).url()}  />
            {post.title}

           </div></Link>
         ))}
                    <div className="submitMore workCard">
                    <Image src={Missing} className="missing" />

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