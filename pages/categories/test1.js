/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Image from 'next/image'

 import { urlFor, sanityClient } from '../../sanity'
 import PortableText from '@sanity/block-content-to-react'
 import Header from "../../components/Header"
 import Aboutheader from "../../components/Aboutheader"

 

 
 
 const test1 = ({ properties }) => {
   return (

  <div>
         {properties.map(post => (
           <div className="test" key={post._id}>
            {post.title}

           </div>
         ))}


  </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = `*[_type=="work" && "Test1" in categories]`
   const properties = await sanityClient.fetch(query)
 
   if (!properties.length) {
     return {
       props: {
         properties: [],
       },
     }
   } else {
     return {
       props: {
         properties,
       },
     }
   }
 }
 
 export default test1;