//FilterHeader.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Exit from '../public/Xmark.svg';
 import Head from 'next/head'
 import Connect from "../components/Connect"


 export default function FilterHeader({ isActive, toggleDrawer, slideUp, slideDown }) {
    return (
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
      onClick={toggleDrawer} onMouseEnter={slideUp} onMouseExit={slideDown}>Click for Categories</button>

        {/* <div>Categories</div> */}
        <div className="b2">Random ⟳</div>
        <Link   href="/fullindex"><div className="b3" >Reset</div></Link>

       </div>
       {/* <div className="filterheaders">
        <div>Jump to: </div>
       </div> */}
       </div>
       
  
    );
  }
  
 

