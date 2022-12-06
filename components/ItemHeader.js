//ItemHeader.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Check from '../public/Checkmark.svg';


 export default function ItemHeader() {
    return (
        <div className="itemheader">
            <div className="flex">
            <div className="checkbox"> <span>[</span> <span className="selected1"><Image src={Check} alt="Selected" /></span> <span>]</span> </div>Item View</div>        
             <div className="flex">
            <a href="/fullindex">
                <div className="checkbox2"> 
                
                <span>[</span> <span className="">&nbsp;Back to Index&nbsp;</span> <span>]</span> 
                
                </div>
                </a></div>                        
        </div>
    );
  }
  
 
