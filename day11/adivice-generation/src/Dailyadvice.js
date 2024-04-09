import React, {useEffect, useState} from "react";
import './Dailyadvice.css';
function Dailyadvice()
{
const [adviceValue,setAdviceValue]=useState("");
// const [name,setname]=useState("elango");
    useEffect(()=>{
        const adviceurl ="https://api.adviceslip.com/advice";
        const fetchadvice =async()=>
        {
            const responce =await fetch(adviceurl);
            const json =await responce.json();
            console.log(json);

            setAdviceValue(json.slip.advice);
        }
        fetchadvice();
    },[]);
    return(
        <>
        <h1>{adviceValue}</h1>
        <h2>elango</h2>
     </>
    )
   
}
export default Dailyadvice;
