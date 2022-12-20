//HomeHeader.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Exit from '../public/Xmark.svg';
 import Head from 'next/head'
 import Connect2 from "../components/Connect2"


 export default function HomeHeader() {
    return (
        <div>
                <Connect2 />
        <Head>
        <title>Gender Network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
<header>
        <h1 className="link" ><Link href="/">Gender Network</Link></h1>
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
  
 

