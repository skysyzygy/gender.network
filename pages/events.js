import Header from "../components/Header"
import { urlFor, sanityClient } from '../sanity'
import PortableText from '@sanity/block-content-to-react'
import Link from "next/link"
import Footer from "../components/Footer"




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

const events = ({ mainproperties, properties }) => {
  return (
      <div className="eventsPage">
              <Header/>
              <div className="container">
                


                <div className="eventblock">
                <div className="eventtext">
                {mainproperties.map(post => (
           <div aria-selected="true"  className="" key={post._id}>
            <h2>
                 <PortableText
                 className=""
                 
                   blocks={post.intro}
                   serializers={serializers}
                 />
                 </h2>
               </div>
                ))}
               </div>
               <h3 aria-selected="true" >
                Upcoming
                </h3>

                {properties.map(post => (
           <div className="eventGrid upcoming" key={post._id}>
                {post.upcoming && post.upcoming.map(({ _id, name = '', date = '', rsvptext = '', rsvpurl = '' }) => (
                <div className="singleevent" key={_id}>
                  <div className="eventTitle" aria-selected="true" >
                  <PortableText
                  className="textbody"
                   blocks={name}
                   serializers={serializers}
                 />
                 </div>
                 <div  className="eventTime">
                  <PortableText
                  className="textbody"
                   blocks={date}
                   serializers={serializers}
                 />
                 </div>
                 <div className="eventUrl">
                  <a target="_blank" href={rsvpurl}>{rsvptext}</a>
                  </div>
                </div>

              ))
              }





           </div>
         ))}

<h3 className="past" aria-selected="true" >
                Past
                </h3>

                {properties.map(post => (
           <div className="eventGrid past" key={post._id}>
                {post.past && post.past.map(({ _id, name = '', date = '', rsvptext = '', rsvpurl = '' }) => (
                <div className="singleevent" key={_id}>
                  <div className="eventTitle" aria-selected="true" >
                  <PortableText
                  className="textbody"
                   blocks={name}
                   serializers={serializers}
                 />
                 </div>
                 <div  className="eventTime">
                  <PortableText
                  className="textbody"
                   blocks={date}
                   serializers={serializers}
                 />
                 </div>
                 <div className="eventUrl">
                  <a target="_blank" href={rsvpurl}>{rsvptext}</a>
                  </div>
                </div>


              ))
              }


              {!post.past && 
              <div className="eventGrid past" >
              <div className="singleevent" ><div className="eventTime">Nothing Yet . . .</div></div>
              <div className="singleevent hidden" >Nothing yet...</div>
              <div className="singleevent hidden" >Nothing yet...</div>

              </div>
              }

</div>



         ))}


                
                
              </div>

      
    </div>
    <Footer />

    </div>

    )
  }
  
  export const getServerSideProps = async () => {
    const query = `*[_type == "events" ]{upcoming[]->, past[]->}`
    const properties = await sanityClient.fetch(query)

    const mainquery = `*[_type == "events" ]`
    const mainproperties = await sanityClient.fetch(mainquery)
  
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
          mainproperties
        },
      }
    }
  }
  
  export default events;