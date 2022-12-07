import Header from "../components/Header"
import Image from 'next/image'
import Feedbacksticker from "../components/Feedbacksticker";


function HomePage() {

  // Random Tag Scripts

  // Random Region

  var randomTag1 = [
    '<div><a href="/category/midwest">Midwest</a></div>',
    '<div><a href="/category/NYC">NYC</a></div>',
    '<div><a href="/category/pacific-northwest">Pacific Northwest</a></div>',
    '<div><a href="/category/san-francisco">San Francisco</a></div>',
    '<div><a href="/category/south">South</a></div>'
  ]
  const out = []
  const elements = 2

  for (let i = 0; i < elements; i++) {
    out.push(randomTag1.splice(Math.floor(Math.random() * randomTag1.length), 1))
  }

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
      <div className="sayhi hvr-bob"><Image src="/Sayhi.png" width="250" height="125" /></div>

      <div className="homepagebg" >


        <div className="cloud" style={{ backgroundColor: randomHex[randomColor] }}>

        <div className="bubbles">
        <div className="bubble bubble1" >

                        <div className="label region">Midwest</div>
                        <div className="innerimg">
                            <img src="/region.jpg"></img>
                        </div>
                        </div>
                        <div className="bubble bubble2">
                        <div className="label time">1960s</div>
                        <div className="innerimg">
                            <img src="/time.png"></img>
                        </div>
                        </div>
                        <div className="bubble bubble3">
                        <div className="label topic">Cockettes</div>
                        <div className="innerimg">
                            <img src="/topic.jpg"></img>
                        </div>
                        </div>
                        <div className="bubble bubble4">
                        <div className="label type">Book</div>
                        <div className="innerimg">
                            <img src="/medium.jpg"></img>
                        </div>
                        </div>
                    </div>

          <div className="tag-gr">

            <div
              suppressHydrationWarning className="tag region" dangerouslySetInnerHTML={{ __html: out[0] }}
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

