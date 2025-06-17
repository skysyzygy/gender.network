//Connect.js

/**
 * @jest-environment jsdom
 */
 
        


    
function getRandom(min, max) {
  const floatRandom = Math.random()

  const difference = max - min

  // random between 0 and the difference
  const random = Math.round(difference * floatRandom)

  const randomWithinRange = random + min

  return randomWithinRange
}



function Bubble2(props) {
  return (
    <>
    <a href={`${props.indexslug}`}>
        {/* <a href={`/${props.indexslug}`}> */}
  <div id="bubble"   className="bubble bubble2" style={{bottom: `${getRandom(10, 60)}vh`, left: `${getRandom(25, 30)}vw`}} >
  <div className="label time">{props.title}</div>
<div  className="innerimg" >
<img src={props.image} layout="fill" /> 
</div>
</div>
</a>
</>
)
}
export default Bubble2