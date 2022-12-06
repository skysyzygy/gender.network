import Header from "../components/Header"





function HomePage() {

  var randomTag1 =[
    '<div><a href="/category/midwest">Midwest</a></div>', 
    '<div><a href="/category/NYC">NYC</a></div>', 
    '<div><a href="/category/pacific-northwest">Pacific Northwest</a></div>', 
    '<div><a href="/category/san-francisco">San Francisco</a></div>', 
    '<div><a href="/category/south">South</a></div>'
  ]
  var randomFact = Math.floor(Math.random() * randomTag1.length);

  var randomTag2 = [
    '<div><a href="/category/1960s">1960s</a></div>', 
    '<div><a href="/category/1970s">1970s</a></div>', 
    '<div><a href="/category/1980s">1980s</a></div>', 
    '<div><a href="/category/1990s">1990s</a></div>', 
    '<div><a href="/category/2000s">2000s</a></div>'
  ]

  var randomFact2 = Math.floor(Math.random() * randomTag2.length);

  var randomTag3 = [
    '<div><a href="/category/Storme-DeLarverie">Storme DeLarverie</a></div>', 
    '<div><a href="/category/Cockettes">Cockettes</a></div>', 
    '<div><a href="/category/Power-Exchange">Power Exchange</a></div>'
  ]
  var randomFact3 = Math.floor(Math.random() * randomTag3.length);

  var randomTag4 = [
    '<div><a href="/category/book">Book</a></div>', 
    '<div><a href="/category/flyer">Flyer</a></div>', 
    '<div><a href="/category/Newspaper">Newspaper</a></div>', 
    '<div><a href="/category/Photo">Photo</a></div>'
  ]
  var randomFact4 = Math.floor(Math.random() * randomTag4.length);

    return (
      <div className="homePage">
              <Header/>

      <div className="homepagebg">


      <div className="cloud">

        <div className="tag-gr">

        <div
      suppressHydrationWarning className="tag region" dangerouslySetInnerHTML={{__html: randomTag1[randomFact]}}
    />
    <div
      suppressHydrationWarning className="tag time" dangerouslySetInnerHTML={{__html: randomTag2[randomFact2]}}
    />
<div
      suppressHydrationWarning className="tag topic" dangerouslySetInnerHTML={{__html: randomTag3[randomFact3]}}
    />

<div
      suppressHydrationWarning className="tag type" dangerouslySetInnerHTML={{__html: randomTag4[randomFact4]}}
    />
       
          <div className="tag">...</div>

        </div>
      </div>
    
    
    
    </div>
    </div>

    )
  }
  
  export default HomePage

