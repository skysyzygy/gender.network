/**
 * @jest-environment jsdom
 */

 import React, { useState, useEffect } from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import { sanityClient,  urlFor } from '../../sanity'
 import PortableText from '@sanity/block-content-to-react'
 import Header from "../../components/Header"
 import ItemHeader from "../../components/ItemHeader"
 import Drawer from 'react-modern-drawer'
 import 'react-modern-drawer/dist/index.css'
 import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
 import Footer from "../../components/Footer"
 import dynamic from "next/dynamic";

const CloverIIIF = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});

const options = {
    // Primary title (Manifest label) for top level canvas.  Defaults to true
    showTitle: false,
    showInformationToggle: false,
    renderAbout: false,
  
    // IIIF Badge and popover containing options.  Defaults to true
    showIIIFBadge: false,
  
    // Ignore supplementing canvases by label value that are not for captioning
    // ignoreCaptionLabels: ['Chapters'],
  
    // Override canvas background color, defaults to #1a1d1e
    canvasHeight: "1100px",
    canvasBackgroundColor: "#ffffff",
    // Set canvas zooming onScoll (this defaults to false)
    // openSeadragon: {
    //   gestureSettingsMouse: {
    //     scrollToZoom: true,
    //   }
    // }
  }


const Work = ({   
  title,
  coverphoto,
  info,
  description,
  source,
  categories,
  similarWorks,
  iiifviewerurl,
}) => {


  console.log(categories.join(", "))
  const catlist = categories.join(", ")
    
   return (

    <div className="itemPage">

        <Header />
        <div className="Container">
        <div className="left">


        <div className="itemh2">
          <div className="itemtitle">
          {title}
          </div>

        <ItemHeader />
        </div>




 {iiifviewerurl && <CloverIIIF id={iiifviewerurl} options={options} />}

 </div>
<div className="right">
<div className="metacontainer">
    <h3>Tags</h3>
  {catlist}
  </div>
  <div className="metacontainer">
  <h3>Similar Works</h3>
<div className="similarContainer">

{similarWorks && similarWorks.map(({_id, coverphoto ='', slug=''}) => (
        <div key={_id} className="similarThumb">
          <Link passHref href="/work/sample">
            <img src={urlFor(coverphoto).url()} layout="fill" />
            </Link>
          </div> ) )}

          
          </div>
          </div>
</div>

</div>


<Footer />
  </div>
   )
 
 }

 export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[ _type == "work" && slug.current == $pageSlug][0]{
    title, coverphoto, info, description, source, categories, similarWorks[]->, iiifviewerurl, slug
  }`


  const work = await sanityClient.fetch(query, { pageSlug })

  if (!work) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: work.title,
        coverphoto: work.coverphoto,
        info: work.info,
        description: work.description,
        source: work.source,
        categories: work.categories,
        similarWorks: work.similarWorks,
        iiifviewerurl: work.iiifviewerurl,
        slug: work.slug,
  },
    }
  }

}




export default Work