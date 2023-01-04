import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { sanityClient, urlFor } from '../sanity'
import Link from 'next/link'
import Image from 'next/image'
import queryString from 'query-string';


function filter(q, properties) {
  const router = useRouter();

  const { location, decade, topic, type } = router.query;
  console.log(type)

  function change_textlocation(variable) {
    document.getElementById("locationbtn").innerHTML = variable;
  }

  function remove_textlocation() {
    document.getElementById("locationbtn").innerHTML = "";
  }

  function change_texttime(variable) {
    document.getElementById("timebtn").innerHTML = variable;
  }

  function remove_texttime() {
    document.getElementById("timebtn").innerHTML = "";
  }

  function change_textcat(variable) {
    document.getElementById("catbtn").innerHTML = variable;
  }

  function remove_textcat() {
    document.getElementById("catbtn").innerHTML = "";
  }

  function change_texttype(variable) {
    document.getElementById("typebtn").innerHTML = variable;
  }

  function remove_texttype() {
    document.getElementById("typebtn").innerHTML = "";
  }

  return (
    <>
      <button id="locationbtn"
        onClick={() => {
          delete router.query.location;
          router.push(router);
          remove_textlocation();
        }}></button>
      <button id="timebtn"
        onClick={() => {
          delete router.query.time;
          router.push(router);
          remove_texttime();
        }}></button>
      <button id="catbtn"
      onClick={() => {
        delete router.query.topic;
        router.push(router);
        remove_textcat();
      }}></button>
      <button id="typebtn"
      onClick={() => {
        delete router.query.type;
        router.push(router);
        remove_texttype();
      }}></button>


      <button
        type="button"
        onClick={() => {
          router.push({
            pathname: '/filter'
          });
          remove_textlocation();
          remove_texttime();
          remove_textcat();
          remove_texttype();
        }}
      >
        Reset
      </button>

      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, location: 'Pacific Northwest' },
          });
          change_textlocation("Pacific Northwest")
        }}
      >
        Pacific Northwest
      </button>
      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, location: 'San Francisco' },
          })
          change_textlocation("San Francisco")
        }}
      >
        San Francisco
      </button>
      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, time: '1960s' },
          })
          change_texttime("1960s")

        }}
      >
        1960s
      </button>

      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, type: 'Flyer' },
          })
          change_texttype("Flyer")
        }}
      >
        Flyer
      </button>

      <button
        type="button"
        onClick={() => {
          router.replace({
            query: { ...router.query, type: 'Book' },
          })
          change_texttype("Book")
        }}
      >
        Book
      </button>

      {q.properties.map(post => (
        <Link href="/work/sample" key={post._id}>
          <div className="workCard" >
            <div className="workContainer">
              <Image src={urlFor(post.coverphoto).url()} placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="0" height="0" size="100vw" unoptimized style={{ width: '31.66vw', height: 'auto' }} /></div>
            {post.title}

          </div></Link>
      ))}
    </>
  )
}


export async function getServerSideProps(context) {
  const location = context.query["location"];
  const decade = context.query["decade"];
  const topic = context.query["topic"];
  const type = context.query["type"];
  console.log(location)
  console.log(topic)
  console.log(type)



  // const query = `*[_type=="work"] | order(title asc) `
  // const q = `*[_type=="work" && '${decade}' in decades] | order(title asc) `
  var q
  if (location && decade && topic && type) {
    q = `*[_type=="work" && '${location}' in locations && '${decade}' in decades && '${topic}' in categories && '${type}' in types] | order(title asc) `
  }
  else if (location && decade && topic && !type) {
    q = `*[_type=="work" && '${location}' in locations && '${decade}' in decades && '${topic}' in categories] | order(title asc) `
  }
  else if (location && decade && !topic && !type) {
    q = `*[_type=="work" && '${location}' in locations && '${decade}' in decades] | order(title asc) `
  }
  else if (location && topic && !decade && !type) {
    q = `*[_type=="work" && '${location}' in locations && '${topic}' in categories] | order(title asc) `
  }
  else if (decade && topic && !location && !type) {
    q = `*[_type=="work" && '${decade}' in decades && '${topic}' in categories] | order(title asc) `
  }
  else if (location && type && !decade && !topic) {
    q = `*[_type=="work" && '${location}' in locations && '${type}' in types] | order(title asc) `
  }
  else if (decade) {
    q = `*[_type=="work" && '${decade}' in decades] | order(title asc) `
  }
  else if (topic) {
    q = `*[_type=="work" && '${topic}' in  categories] | order(title asc) `
  }
  else if (location) {
    q = `*[_type=="work" && '${location}' in  locations] | order(title asc) `
  }
  else if (type) {
    q = `*[_type=="work" && '${type}' in  types] | order(title asc) `
  }
  else {
    q = `*[_type=="work"] | order(title asc) `
  }
  // const q = `*[count((categories)[@ in '${tag}']) == 2] | order(title asc) `
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