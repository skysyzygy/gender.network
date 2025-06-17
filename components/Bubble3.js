
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



function Bubble3(props) {
  return (
    <>
        <a href={`${props.indexslug}`}>
  <div id="bubble"   className="bubble bubble3" style={{top: `${getRandom(10, 60)}vh`, right: `${getRandom(25, 35)}vw`}} >
  <div className="label topic">{props.title}</div>
<div  className="innerimg" >
<img src={props.image} layout="fill" /> 
</div>
</div>
</a>
</>
)
}
export default Bubble3