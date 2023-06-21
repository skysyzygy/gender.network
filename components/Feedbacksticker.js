//Feedbacksticker.js

/**
 * @jest-environment jsdom
 */

import Link from 'next/link'

export default function Feedbacksticker() {
   return (

       <div className="ovalsticker hvr-pulse">
           <Link href="/about" >
           <div className="ovaltext">Feedback</div>
           </Link>
       </div>

      
 
   );
 }
 

