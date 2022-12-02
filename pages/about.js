/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Image from 'next/image'

 import { urlFor, sanityClient } from '../sanity'
 import PortableText from '@sanity/block-content-to-react'
 import Header from "../components/Header"
 import Aboutheader from "../components/Aboutheader"

 
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
       const { blank, href } = mark
       return blank ?
         <a href={href} target="_blank" rel="noreferrer">{children}</a>
         : <a href={href}>{children}</a>
     }
   }
 }
 
 
 const about = ({ properties }) => {
   return (
    <div className="aboutPage">
    <Header/>     
    <div className="container">    
         {properties.map(post => (
           <div className="aboutshow" key={post._id}>
            <div className="aboutblock textblock1">
            <div className="aboutheader">
                  <Aboutheader />
                </div>
               <div className="about1col1">
                <div className="megaintro">
                 <PortableText
                   blocks={post.intro}
                   serializers={serializers}
                 />
               </div>
               <div className="about1columns">
               <PortableText
                   blocks={post.aboutcopy}
                   serializers={serializers}
                 />
                 </div>
               </div>

                </div>
                <div className="textblock">
                <Image src='/Wearenotokheader.png' width={282} height={100} alt="Retro font that says We Are Not OK" />
                  <PortableText
                  className="textbody"
                   blocks={post.wearenotok}
                   serializers={serializers}
                 />
                  </div>
                  <div className="col2">
                  <div className="cola">
                  <div className="textblock">
                  <Image src='/Fundersheader.png' width={198} height={110} alt="Retro font that says Funders" />
                  <div className="textbody">
                  <PortableText
                  className="textbody"
                   blocks={post.fundercopy}
                   serializers={serializers}
                 />
                 <div className="logos">
                       <Image src='/lmcc.png' width={184} height={93} />
                       <Image src='/nysoa.png' width={352} height={84} />
                       <Image src='/puffin.jpeg' width={80} height={125} />
                       </div>

                 </div>
                  </div>
                  <div className="">
                  <Image src='/Gratitudeheader.png' width={239} height={120} alt="Retro font that says Funders" />
                  <PortableText
                  className="textbody"
                   blocks={post.gratcopy}
                   serializers={serializers}
                 />
                  </div>
                    </div>
                    <div className="colb">
                    <div className="textblock">
                    <Image src='/Licensingheader.png' width={495} height={110} alt="Retro font that says Funders" />
                  <PortableText
                  className="textbody"
                   blocks={post.licensingcopy}
                   serializers={serializers}
                 />
                  </div>
                  <div className="">
                  <Image src='/Archivesheader.png' width={366} height={120} alt="Retro font that says Funders" />
                  <div className="textbody">
                  <PortableText
                    className="textbody" 
                   blocks={post.archivescopy}
                   serializers={serializers}
                 />
                 </div>
                  </div>
                    </div>
                  </div>
 

           </div>
         ))}
 
 
 </div>

       </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = `*[_type == "about" ]`
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
 
 export default about;