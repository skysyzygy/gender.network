//Footer.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Exit from '../public/Xmark.svg';


 export default function Footer() {
    return (
<footer>
    <div className="footertitle">Gender Network is a growing ecosystem . . . We greatly appreciate your messages and feedback.</div>
    <div className="flex">
        <div className="left">
            <div className="footerheader">Menu</div>
            <div className="menulinks">
                <div><Link href="/fullindex">Full Index</Link></div>
                <div><Link href="/stories">Stories</Link></div>
                <div><Link href="/about">About</Link></div>
                <div><Link href="/events">Events</Link></div>
            </div>
        </div>
        <div  className="right">
        <div className="footerheader">Contact</div>
        <div className="contactlinks">
        <div><Link href="/fullindex"><span><Image src='/Email.png' height={93} width={150}/></span></Link></div>
        <div><Link href="/fullindex"><span><Image src='/Fb.png' height={93} width={250}/></span></Link></div>
        <div><Link href="/fullindex"><span><Image src='/Instagram.png' height={93} width={275}/></span></Link></div>
        <div><Link href="/fullindex"><span><Image src='/Live Chat.png' height={93} width={260}/></span></Link></div>
        <div><Link href="/fullindex"><span><Image src='/Add Inspiration.png' height={93} width={410}/></span></Link></div>

            </div>
        </div>
    </div>
</footer>

       
  
    );
  }
  
 

