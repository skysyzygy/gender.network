import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { sanityClient,  urlFor } from '../sanity'
import Link from 'next/link'
import Image from 'next/image'
import queryString from 'query-string';


function filter (q, properties, length) {
    const router = useRouter()
    const {tag} = router.query
    console.log(tag)
    var params = new URLSearchParams(location.search);
    console.log(params)


    return (
        <>
    {tag}
        {q.properties.map(post => (
                        <Link href="/work/sample" key={post._id}>
           <div className="workCard" >
<div className="workContainer">
  <Image src={urlFor(post.coverphoto).url()}  placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="width="0" height="0" size="100vw"   unoptimized  style={{ width: '31.66vw', height: 'auto' }} /></div>
            {post.title}

           </div></Link>
         ))}  
         </>
    )
}


  export async function getServerSideProps( context ) {
    console.log(context)
    const tag = context.query["tag"];
    // const q = `*[_type=="work" && '${tag}' in categories] | order(title asc) `
    const q = `*[count((categories)[@ in '${tag}']) == 2] | order(title asc) `
    const properties = await sanityClient.fetch(q)
  
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


export default filter