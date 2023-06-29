//Footer.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Exit from '../public/Xmark.svg';
 import Typing from 'react-typing-animation';
 import ScrollToTop from './ScrollToTop';
import PortableText from "@sanity/block-content-to-react";

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
        // Read https://css-tricks.com/use-target_blank/
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

 export default function Footer(props) {
    return (
<footer>
  <div className="constraint">
<div className="flex between">
    <div className="footertitle">
        <Typing startDelay={1000}>{props.footertitle}</Typing>
    </div>
    <ScrollToTop />
   </div>
    <div className="flex">
        <div className="left">
            <div className="footerheader">Menu</div>
            <div className="menulinks">
            <PortableText blocks={props.footermenu} serializers={serializers} />
            </div>
        </div>
        <div  className="right">
        <div className="footerheader">Contact</div>
        <div className="contactlinks">
        <div><a href={props.emaillink} target="_blank"><span><Image src='/Email.png' height={74} width={120}/></span></a></div>
        <div><Link href={props.facebooklink} target="_blank"><span><Image src='/Fb.png' height={74} width={200}/></span></Link></div>
        <div><Link href={props.iglink} target="_blank"><span><Image src='/Instagram.png' height={74} width={220}/></span></Link></div>
   </div>
        </div>
    </div>
    </div>
</footer>

       
  
    );
  }
  
 

