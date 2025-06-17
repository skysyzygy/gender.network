
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



function Bubble4(props) {
  return (
    <>
        <a href={`${props.indexslug}`}>
  <div id="bubble"   className="bubble bubble4" style={{bottom: `${getRandom(10, 35)}vh`, right: `${getRandom(2, 8)}vw`}}>
  <div className="label type">{props.title}</div>
<div  className="innerimg" >
   <img src={props.image} layout="fill" /> 
</div>
</div>
</a>
</>
)
}
export default Bubble4