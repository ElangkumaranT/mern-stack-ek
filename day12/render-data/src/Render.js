import React,{useEffect,useState} from "react";

function Render()
{
    const [count,setCount]=useState(0);
    useEffect(()=>
{
    setTimeout(()=>{
        setCount((count)=>count+1);
    },1000);
});
return (<><h1>Thisfunction has rendered {count} times!</h1>
<button onClick={()=>setCount((dvalue)=>dvalue+1)}>ADD</button>
</>);

}
export default Render;