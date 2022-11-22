import { useState } from "react";
import Result from "./Result";

const RangeSlider = () => {
const [weight,setWeight] =useState(0);
const [height,setHeight] =useState(0);

const getWeight=(e)=>{
    setWeight(e.target.value);
}
const getHeight=(e)=>{
    setHeight(e.target.value);
}
    return (  
    <div>
        <p>weight</p>
<input type="range" min="0" max="300" onChange={getWeight} defaultValue="0" className="slider"/>
  <p><span className="value">{weight}</span></p>
  <p>height</p>
  <input type="range" min="0" max="300" onChange={getHeight} defaultValue="0" className="slider"/>
  <p><span className="value">{height}</span></p>

  <Result weight={weight} height={height}/>
    </div>
    );
}
 
export default RangeSlider;
