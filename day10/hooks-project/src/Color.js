import React , {useState} from "react";
import './Color.css';
function Color()
{
    const [color, setColor] = useState("black");
    return(      
      <>
      <center> <h1 className={color}>my favorite countyp {color}</h1>
         <button type="button" onClick={()=>setColor("red")}>RED</button><br></br>   {/*} color and setcolor is a variable */}
        <button type="button" onClick={()=>setColor("blue")}>blue</button><br></br>
        <button type="button" onClick={()=>setColor("yellow")}>yellow</button>
        </center>
    </>
    )    
}
export default Color;