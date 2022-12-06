import Header from "../components/Header"
import randomItem from 'random-item';
import unquote from 'unquote';





function HomePage() {

  var randomTag1 = randomItem([
    '<div><a href="/category/midwest">Midwest</a></div>', 
    '<div><a href="/category/NYC">NYC</a></div>', 
    '<div><a href="/category/pacific-northwest">Pacific Northwest</a></div>', 
    '<div><a href="/category/san-francisco">San Francisco</a></div>', 
    '<div><a href="/category/south">South</a></div>'
  ]);
  
  var randomTag2 = randomItem([
    '<div><a href="/category/1960s">1960s</a></div>', 
    '<div><a href="/category/1970s">1970s</a></div>', 
    '<div><a href="/category/1980s">1980s</a></div>', 
    '<div><a href="/category/1990s">1990s</a></div>', 
    '<div><a href="/category/2000s">2000s</a></div>'
  ]);

  var randomTag3 = randomItem([
    '<div><a href="/category/Storme-DeLarverie">Storme DeLarverie</a></div>', 
    '<div><a href="/category/Cockettes">Cockettes</a></div>', 
    '<div><a href="/category/Power-Exchange">Power Exchange</a></div>'
  ]);

  var randomTag4 = randomItem([
    '<div><a href="/category/book">Book</a></div>', 
    '<div><a href="/category/flyer">Flyer</a></div>', 
    '<div><a href="/category/Newspaper">Newspaper</a></div>', 
    '<div><a href="/category/Photo">Photo</a></div>'
  ]);

  var randomTag1 =[
    '<div><a href="/category/midwest">Midwest</a></div>', 
    '<div><a href="/category/NYC">NYC</a></div>', 
    '<div><a href="/category/pacific-northwest">Pacific Northwest</a></div>', 
    '<div><a href="/category/san-francisco">San Francisco</a></div>', 
    '<div><a href="/category/south">South</a></div>'
  ]
  var randomFact = Math.floor(Math.random() * randomTag1.length);


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
      suppressHydrationWarning className="tag time" dangerouslySetInnerHTML={{__html: randomTag2}}
    />
<div
      suppressHydrationWarning className="tag topic" dangerouslySetInnerHTML={{__html: randomTag3}}
    />

<div
      suppressHydrationWarning className="tag type" dangerouslySetInnerHTML={{__html: randomTag4}}
    />
       
          <div className="tag">...</div>

        </div>
      </div>
    
    
    
    </div>
    </div>

    )
  }
  
  export default HomePage

