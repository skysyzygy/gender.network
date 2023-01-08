
/**
 * @jest-environment jsdom
 */
 import React, { useState, useEffect } from "react";

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Exit from '../public/Xmark.svg';
 import Head from 'next/head'
 import Swal from 'sweetalert2'
 import withReactContent from 'sweetalert2-react-content'
 import { urlFor, sanityClient } from '../sanity'



    
function getRandom(min, max) {
  const floatRandom = Math.random()

  const difference = max - min

  // random between 0 and the difference
  const random = Math.round(difference * floatRandom)

  const randomWithinRange = random + min

  return randomWithinRange
}



function Bubble4(props) {
  return (
    <>
  <div id="bubble"   className="bubble bubble4" style={{bottom: `${getRandom(10, 35)}vh`, right: `${getRandom(2, 8)}vw`}}>
  <div className="label type">{props.title}</div>
<div  className="innerimg" >
<img src={urlFor(props.image).url()} layout="fill" />
</div>
</div>
</>
)
}
export default Bubble4