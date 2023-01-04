import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { sanityClient, urlFor } from '../sanity'
import Link from 'next/link'
import Image from 'next/image'
import Exit from '../public/Xmark.svg';
import PortableText from '@sanity/block-content-to-react'
import Header from "../components/Header"
import FilterHeader from "../components/FilterHeader"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Arrow from '../public/Arrowdown.svg';
import Missing from '../public/Missingcard.png';
import Footer from "../components/Footer"
import Connect from "../components/Connect"
import Head from 'next/head'

function filter(q, properties) {

    // Drawer
    const [isOpen, setIsOpen] = React.useState(false)
    const [isActive, setIsActive] = useState(false);
    const [isUp, setIsUp] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const [setFilters, haveFilters] = useState(false);


    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
        setIsActive(current => !current);
    }

    const slideUp = () => {
        setIsUp(current => !current);
    }


    const slideDown = () => {
        setIsDown(current => !current);
    }

    const buttonHandler = () => {
        haveFilters(current => !current)
      }

    // Router
    const router = useRouter();

    const { location, decade, topic, type } = router.query;
    console.log(location)

    function change_textlocation(variable) {
        document.getElementById("locationbtn").innerHTML = variable;
        // document.getElementById("btnheader").classList.add("showall");
        
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
        <div className={`indexPage ${isActive ? "fixed" : "normal"}`} >

            <div className="filterscontainer">
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='bottom'
                    className='bla bla bla'
                >

                    <div className="columnContainers">




                    <button
                            type="button"
                            onClick={() => {
                                router.replace({
                                    query: { ...router.query, location: 'South' },
                                });
                                change_textlocation("South")
                            }}
                        >
                            South
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
                                });
                                change_textlocation("San Francisco");
                               
                            }}
                        >
                            San Francisco
                        </button>
                                                <button
                            type="button"
                            onClick={() => {
                                router.replace({
                                    query: { ...router.query, location: 'NYC' },
                                })
                                change_textlocation("NYC")
                            }}

                        >
                            NYC
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                router.replace({
                                    query: { ...router.query, topic: 'Cockettes' },
                                })
                                change_textcat("Cockettes")

                            }}
                        >
                            Cockettes
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
                    </div>
                </Drawer>

                {/* <FilterHeader isActive={isActive} toggleDrawer={toggleDrawer} slideUp={slideUp} slideDown={slideDown} /> */}
                <div className="headercontainer">
<Connect />

<Head>
        <title>Gender Network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
<header>
        <h1 className="link"><Link href="/">Gender Network</Link></h1>
        <nav>
            <div className="gr1"><Link href="/fullindex"><div className="linkgroup lt"><div className="checkbox"> <span>[</span> <span className="selected1"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>Full Index</div></Link>
            <Link href="/stories"><div className="linkgroup rt"><div className="checkbox"> <span>[</span> <span className="selected2"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>Stories</div></Link>
            </div>
            <div className="gr2">
            <Link href="/about"><div className="linkgroup lt"><div className="checkbox"> <span>[</span> <span className="selected3"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>About</div></Link>
            <Link href="/events"><div className="linkgroup rt"><div className="checkbox"> <span>[</span> <span className="selected4"><Image src={Exit} alt="Selected" /></span> <span>]</span> </div>Events</div></Link>
            </div>
        </nav>
       </header>   
       <div className="filterheaders">
       <button id="button" className={`${isActive ? "minus" : "add"}`}
       style={{
        backgroundColor: isActive ? '#efd673' : '',
        color: isActive ? 'black' : '',
  
      }}
      onClick={toggleDrawer} onMouseEnter={slideUp} onMouseExit={slideDown}>Click for Categories</button>

        {/* <div>Categories</div> */}
        <div className="b2">Random ⟳</div>
        <button
                            type="button"
                            onClick={() => {
                                router.push({
                                    pathname: '/indextry'
                                });
                                remove_textlocation();
                                remove_texttime();
                                remove_textcat();
                                remove_texttype();
                            }}
                        >
                            Reset
                        </button>
       </div>
       <div id="btnheader" className={`filterheaders`}>
        <div>                <button id="locationbtn"
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
                            }}></button></div>
       </div>
       </div>


            </div>
            <ResponsiveMasonry className="workGrid"
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry columnsCount={3} gutter="25px">
                    {q.properties.map(post => (
                        <Link href="/work/sample" key={post._id}>
                            <div className="workCard" >
                                <div className="workContainer">
                                    <Image src={urlFor(post.coverphoto).url()} placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAOvis////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="0" height="0" size="100vw" unoptimized style={{ width: '31.66vw', height: 'auto' }} /></div>
                                {post.title}

                            </div></Link>
                    ))}

                    <div className="submitMore workCard">
                        <Image src={Missing} className="missing" width="0" height="0" size="100vw" unoptimized style={{ width: '31.66vw', height: 'auto' }} />

                    </div>
                </Masonry>
            </ResponsiveMasonry>

            <div className="drawerpreview" onClick={toggleDrawer} style={{
                transform: isUp ? 'scaleY(1)' : '',
            }}></div>
            <Footer />
        </div>






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
        else if (type && decade && !topic && !location) {
        q = `*[_type=="work" && '${type}' in categories && '${decade}' in decades] | order(title asc) `
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