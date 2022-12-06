import Header from "../components/Header"
import Image from 'next/image'
import Feedbacksticker from "../components/Feedbacksticker";
import Link from 'next/link'


function HomePage() {

    // Random Scripts

    // Random Region

    // var randomTag1 = [
    //   '<div><a href="/category/midwest">Midwest</a></div>',
    //   '<div><a href="/category/NYC">NYC</a></div>',
    //   '<div><a href="/category/pacific-northwest">Pacific Northwest</a></div>',
    //   '<div><a href="/category/san-francisco">San Francisco</a></div>',
    //   '<div><a href="/category/south">South</a></div>'
    // ]
    // const out = []
    // const elements = 2

    // for (let i = 0; i < elements; i++) {
    //   out.push(randomTag1.splice(Math.floor(Math.random() * randomTag1.length), 1))
    // }

    // Random Img - Region

    const midwest = {
        label: 'Midwest',
        url: 'Midwest',
        image: 'https://cdn.sanity.io/images/uu6glpvp/production/ef380b9abffe3c7af80740344ceaab5a733c1cfc-3404x5100.jpg'
    }

    const NYC = {
        label: 'NYC',
        url: 'NYC',
        image: 'https://cdn.sanity.io/images/uu6glpvp/production/2c7c2f5b7952ba2206641e6e771edea18f658a4c-3404x5100.jpg'
    }

    const PNW = {
        label: 'Pacific Northwest',
        url: 'pacific-northwest',
        image: 'https://cdn.sanity.io/images/uu6glpvp/production/b84a5507eae772a0521d6349578c86ff5523f8ac-5100x3404.jpg'
    }

    const SF = {
        label: 'San Francisco',
        url: 'san-francisco',
        image: 'https://cdn.sanity.io/images/uu6glpvp/production/1f6b19131c2d9efefc77e9b6651d0a43c354d5d0-3404x5100.jpg'
    }

    const south = {
        label: 'South',
        url: 'south',
        image: 'https://cdn.sanity.io/images/uu6glpvp/production/1c4c2de0bb986e7901239c3e1b765b1fa7ac9ab7-3404x5100.jpg'
    }


    var randomTag2 = [
        midwest,
        NYC,
        PNW,
        SF,
        south
    ]
    const out2 = []
    const elements2 = 2

    for (let i = 0; i < elements2; i++) {
        out2.push(randomTag2.splice(Math.floor(Math.random() * randomTag2.length), 1))
    }

    console.log(out2)

    const firstone = out2[0]
    const secondone = out2[1]


    // Random Time

    var randomTag2 = [
        '<div><a href="/category/1960s">1960s</a></div>',
        '<div><a href="/category/1970s">1970s</a></div>',
        '<div><a href="/category/1980s">1980s</a></div>',
        '<div><a href="/category/1990s">1990s</a></div>',
        '<div><a href="/category/2000s">2000s</a></div>'
    ]

    var randomFact2 = Math.floor(Math.random() * randomTag2.length);

    // Random Topic

    var randomTag3 = [
        '<div><a href="/category/Storme-DeLarverie">Storme DeLarverie</a></div>',
        '<div><a href="/category/Cockettes">Cockettes</a></div>',
        '<div><a href="/category/Power-Exchange">Power Exchange</a></div>'
    ]
    var randomFact3 = Math.floor(Math.random() * randomTag3.length);

    // Random Medium

    var randomTag4 = [
        '<div><a href="/category/book">Book</a></div>',
        '<div><a href="/category/flyer">Flyer</a></div>',
        '<div><a href="/category/Newspaper">Newspaper</a></div>',
        '<div><a href="/category/Photo">Photo</a></div>'
    ]
    var randomFact4 = Math.floor(Math.random() * randomTag4.length);

    // Random Color Script

    var randomHex = [
        '#AEC9F1',
        '#EBE2B3',
        '#FBE1EB',
        '#F5BB89'
    ]
    var randomColor = Math.floor(Math.random() * randomHex.length);

    return (
        <div className="homePage" >
            <Header />
            <Feedbacksticker />
            <div className="sayhi hvr-bob"><Image src="/Sayhi.png" width="250px" height="125px" /></div>

            <div className="homepagebg" >


                <div className="cloud" style={{ backgroundColor: randomHex[randomColor] }}>

                    {/* {firstone.map(post => (
            <div className="bubble1">
              <Link href={ '/category/' + post.url }>
              {post.label}
              </Link>
            </div> ))} */}




                    <div className="tag-gr">

                        <div
                            suppressHydrationWarning className="tag region" dangerouslySetInnerHTML={{ __html: out2[0].div }}
                        />
                        <div
                            suppressHydrationWarning className="tag time" dangerouslySetInnerHTML={{ __html: randomTag2[randomFact2] }}
                        />
                        <div
                            suppressHydrationWarning className="tag topic" dangerouslySetInnerHTML={{ __html: randomTag3[randomFact3] }}
                        />

                        <div
                            suppressHydrationWarning className="tag type" dangerouslySetInnerHTML={{ __html: randomTag4[randomFact4] }}
                        />

                        <div className="tag">...</div>

                    </div>
                </div>



            </div>
        </div>

    )
}

export default HomePage

