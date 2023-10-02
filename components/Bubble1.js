//Connect.js

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



function Bubble1(props) {
  return (
    <>
        <a href={`${props.indexslug}`}>
  <div id="bubble" className="bubble bubble1" style={{bottom: `${getRandom(30, 35)}vh`, left: `${getRandom(1, 5)}vw`}} >
  <div className="label region">{props.title}</div>
<div  className="innerimg" >
<img src={props.image} layout="fill" /> 
</div>
</div>
</a>
</>
)
}
export default Bubble1