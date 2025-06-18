/**
 * @jest-environment jsdom
 */

 import PortableText from '@sanity/block-content-to-react'
import dynamic from "next/dynamic"
import Link from 'next/link'
import Script from 'next/script'
import 'react-modern-drawer/dist/index.css'
import Footer from "../../components/Footer"
import Headerslug from "../../components/Headerslug"
import ItemHeader from "../../components/ItemHeader"
import { sanityClient } from '../../sanity'

const CloverIIIF = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});

export const config = {
  runtime: 'experimental-edge',
}

 
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
  locations1,
  decades1,
  topics1,
  types1,
  similarWorks,
  iiifviewerurl,
  globalproperties
}) => {

  var declist
  var loclist
  var toplist
  var typelist

  if (decades) {
   declist = decades.join(", ")
  }

  if (locations) {
   loclist = locations.join(", ")
  } 

  if (categories) {
   toplist = categories.join(", ")
  }

  if (types) {
   typelist = types.join(", ")
  }

  const baseurl = 'https://gender-network.com/work'

const slugurl = [baseurl, '/', slug.current].join(' ');
const newslug = slugurl.replace(/\s/g, '');

const emaillink = globalproperties[0].emaillink
const facebooklink = globalproperties[0].facebooklink
const iglink = globalproperties[0].iglink



   return (

    <div className="itemPage"   id="scroll-to-top">
<div id="fb-root"></div>
<Script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0" nonce="wefkaPwQ" />

        <Headerslug title={title} coverphoto={coverphoto} emaillink={emaillink} facebooklink={facebooklink} iglink={iglink} />
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
 {locations1 && <div className="metacontainer">
  <h3>Location</h3>
  {locations1.map(({ _id, slug = "", title = "" }) => (
    <span key="_id">
      <a href={`/fullindex?location=${_id}&locationtitle=${title}`} >{title}</a>
    </span>
 ))}
  </div> }
   {decades1 && <div className="metacontainer">
    <h3>Decade</h3>
    {decades1.map(({ _id, slug = "", title = "" }) => (
    <span key="_id">
      <a href={`/fullindex?decade=${_id}&decadetitle=${title}`} >{title}</a>
    </span>
 ))}
  </div> } 
  {topics1 && <div className="metacontainer">
    <h3>Topic</h3>
    {topics1.map(({ _id, slug = "", title = "" }) => (
    <span key="_id">
      <a href={`/fullindex?topic=${_id}&topictitle=${title}`} >{title}</a>
    </span>
 ))}
  </div> }
  {types1 && <div className="metacontainer">
    <h3>Type</h3>
    {types1.map(({ _id, slug = "", title = "" }) => (
    <span key="_id">
      <a href={`/fullindex?type=${_id}&typetitle=${title}`} >{title}</a>
    </span>
 ))}
  </div> } 

  
{/* {locations && <div className="metacontainer">
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
  </div> } */}

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


{globalproperties.map(
          (
            {
              _id,
              footertitle = "",
              footermenu = "",
              footercontact = "",
              emaillink = "",
              facebooklink = "",
              iglink=""
            },
            index
          ) => (
            <div key={index}>
              <Footer
                footertitle={footertitle}
                footermenu={footermenu}
                footercontact={footercontact}
                emaillink={emaillink}
                facebooklink={facebooklink}
                iglink={iglink}
              />
            </div>
          )
        )}
  </div>
   )
 
 }

 export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[ _type == "work" && slug.current == $pageSlug][0]{
    title, creator, publisher, date, coverphoto, coverphoto2, notes, archive, collection, locations, decades, categories, types, locations1[]->{_id, title, "slug": slug.current}, decades1[]->{_id, title, "slug": slug.current}, topics1[]->{_id, title, "slug": slug.current}, types1[]->{_id, title, "slug": slug.current}, similarWorks[]->, iiifviewerurl, slug
  }`


  const work = await sanityClient.fetch(query, { pageSlug })

  const globalquery = `*[_type == "global" ]`;
  const globalproperties = await sanityClient.fetch(globalquery);

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
        locations1: work.locations1,
        decades1: work.decades1,
        topics1: work.topics1,
        types1: work.types1,
        similarWorks: work.similarWorks,
        iiifviewerurl: work.iiifviewerurl,
        slug: work.slug,
        globalproperties
  },
    }
  }

}




export default Work