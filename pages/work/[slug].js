/**
 * @jest-environment jsdom
 */

 import React, { useState, useEffect } from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import { sanityClient,  urlFor } from '../../sanity'
 import PortableText from '@sanity/block-content-to-react'
 import Headerslug from "../../components/Headerslug"
 import ItemHeader from "../../components/ItemHeader"
 import Drawer from 'react-modern-drawer'
 import 'react-modern-drawer/dist/index.css'
 import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
 import Footer from "../../components/Footer"
 import dynamic from "next/dynamic";
 import Script from 'next/script'

const CloverIIIF = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});

 
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
  creator,
  publisher,
  date,
  slug,
  coverphoto,
  coverphoto2,
  notes,
  archive,
  collection,
  locations,
  decades,
  categories,
  types,
  similarWorks,
  iiifviewerurl,
}) => {


  const loclist = locations.join(", ")
  const declist = decades.join(", ")
  const toplist = categories.join(", ")
  const typelist = types.join(", ")

  const baseurl = 'https://gender-network.com/work'
  console.log(baseurl)
  console.log(slug.current)
const slugurl = [baseurl, '/', slug.current].join(' ');
const newslug = slugurl.replace(/\s/g, '');
console.log(newslug)

   return (

    <div className="itemPage"   id="scroll-to-top">
<div id="fb-root"></div>
<Script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0" nonce="wefkaPwQ" />

        <Headerslug title={title} coverphoto={coverphoto}  />
        <div className="Container">
        <div className="left">


        <div className="itemh2">
          <div className="itemtitle">
          {title}
          </div>

        <ItemHeader />
        </div>




 {iiifviewerurl && <CloverIIIF id={iiifviewerurl} options={options} />}
<br></br>
 <div className="fb-comments" data-href={newslug} data-width="600" data-numposts="10"></div>

 </div>
<div className="right">
{creator && <div className="metacontainer">
    <h3>Creator</h3>
  {creator}
  </div>}
  {publisher && <div className="metacontainer">
    <h3>Publisher</h3>
  {publisher}
  </div> }
  {date && <div className="metacontainer">
    <h3>Date</h3>
  {date}
  </div> }
{notes && <div className="metacontainer">
    <h3>Notes</h3>
    <PortableText
                   blocks={notes}
                   serializers={serializers}
                 />
  </div>}

  {archive && <div className="metacontainer">
    <h3>Archive</h3>
  {archive}
  </div> }
  {collection && <div className="metacontainer">
    <h3>Collection</h3>
  {collection}
  </div> }
  {locations && <div className="metacontainer">
    <h3>Location</h3>
  {loclist}
  </div> }
  {decades && <div className="metacontainer">
    <h3>Decade</h3>
  {declist}
  </div> }
  {categories && <div className="metacontainer">
    <h3>Topic</h3>
  {toplist}
  </div> }
  {types && <div className="metacontainer">
    <h3>Type</h3>
  {typelist}
  </div> }

  {similarWorks && <div className="metacontainer">
  <h3>Similar Works</h3>
<div className="similarContainer">

{similarWorks && similarWorks.map(({_id, coverphoto ='', slug=''}) => (
        <div key={_id} className="similarThumb">
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}>
            <img src={coverphoto} layout="fill" />
            </Link>
          </div> ) )}

          
          </div>
          </div> }
</div>

</div>


<Footer />
  </div>
   )
 
 }

 export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[ _type == "work" && slug.current == $pageSlug][0]{
    title, creator, publisher, date, coverphoto, coverphoto2, notes, archive, collection, locations, decades, categories, types, similarWorks[]->, iiifviewerurl, slug
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
        creator: work.creator,
        publisher: work.publisher,
        date: work.date,
        coverphoto: work.coverphoto,
        coverphoto2: work.coverphoto2,
        notes: work.notes,
        archive: work.archive,
        collection: work.collection,
        locations: work.locations,
        decades: work.decades,
        categories: work.categories,
        types: work.types,
        similarWorks: work.similarWorks,
        iiifviewerurl: work.iiifviewerurl,
        slug: work.slug,
  },
    }
  }

}




export default Work