//Header.js

/**
 * @jest-environment jsdom
 */
import React, { useState, useEffect } from 'react'

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Exit from '../public/Xmark.svg';
 import Head from 'next/head'
 import Connect from "../components/Connect"
 import Customhead from "../components/Customhead"

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

 export default function Headerslug(coverphoto, title) {

  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
        setActive(!isActive);
    } 

    return (
        <div className="headercontainer">
                <Connect />
                <Head>
<head dangerouslySetInnerHTML={{ __html: '<!--website BY ｒｉｔｕ ｇｈｉｙａ ~ ｗｗｗ.ｒ-ｉ-ｔ-ｕ.ｃｏｍ -->' }}>
      </head>
<title>Gender.Network</title>
        <meta property="og:title" name="twitter:title"  content="Gender.Network" key="title" />

        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.ico" />
<meta property="og:url" content="https://gender.network" />
<meta property="og:image" content={coverphoto} />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:description"  name="description"
  content={title} />
  <meta name="google" content="notranslate" />
  <meta name="twitter:card" content="summary" />
<meta name="twitter:image" content={coverphoto} />


      </Head>
      <div className="mobilenav">

      <button className={` ${isActive ? 'open': null}`} onClick={toggleDrawer}>
    <div className="bar-one" />
              <div className="bar-three" />
    </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='topnav'
                overlayOpacity='0'
                width='500px'
            >
                <div>
                
                {/* <h1 className="link" ><Link href="/">Gender Network</Link></h1> */}
                 
                  <div className="navGroup">
                    <div className={`menuborder ${show ? 'revealdisplay': null}`}>&nbsp;&nbsp;</div>
                    <div><Link href="/">Home</Link></div>
                    <div><Link href="/fullindex">Full Index</Link></div>
                    <div><Link href="/stories">Stories</Link></div>
                    <div><Link href="/about">About</Link></div>
                    <div><Link href="/events">Events</Link></div>
                    <div className="menuborderlast">&nbsp;&nbsp;</div>

                  </div>
                  
                </div>
            </Drawer>
            </div>
<header>

        <h1 className="link" ><Link href="/">Gender.Network</Link></h1>
        <nav>
            <div className="gr1"><Link href="/fullindex"><div className="linkgroup lt"><div className="checkbox"> <span>[</span> <span className="selected1"><Image src={Exit} alt="Selected" width="25px" height="25px" /></span> <span>]</span> </div>Full Index</div></Link>
            <Link href="/stories"><div className="linkgroup rt"><div className="checkbox"> <span>[</span> <span className="selected2"><Image src={Exit} alt="Selected" width="25px" height="25px" /></span> <span>]</span> </div>Stories</div></Link>
            </div>
            <div className="gr2">
            <Link href="/about"><div className="linkgroup lt"><div className="checkbox"> <span>[</span> <span className="selected3"><Image src={Exit} alt="Selected" width="25px" height="25px" /></span> <span>]</span> </div>About</div></Link>
            <Link href="/events"><div className="linkgroup rt"><div className="checkbox"> <span>[</span> <span className="selected4"><Image src={Exit} alt="Selected" width="25px" height="25px" /></span> <span>]</span> </div>Events</div></Link>
            </div>
        </nav>

       </header>   
       </div>
       
  
    );
  }
  
 

