//FilterHeader.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'
 


 export default function FilterHeader() {
    return (
      <div className="filtercontainer">
       <div className="filterheaders">
        <div>Categories</div>
        <div>Random</div>
        <div>Reset</div>

       </div>
       </div>
    );
  }
  
 

