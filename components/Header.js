//Header.js

/**
 * @jest-environment jsdom
 */
import { useState } from 'react';

 import Image from 'next/image';
import Link from 'next/link';
import Connect from "../components/Connect";
import Customhead from "../components/Customhead";
import Exit from '../public/Xmark.svg';

// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

 export default function Header(props) {

  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
        setActive(!isActive);
    } 

    return (
        <div className="headercontainer">
                <Connect emaillink={props.emaillink} facebooklink={props.facebooklink} iglink={props.iglink} />
       <Customhead />
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
  <div className="flexbetween constraint">

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
        </div>

       </header>   
       </div>
       
  
    );
  }
  
 

