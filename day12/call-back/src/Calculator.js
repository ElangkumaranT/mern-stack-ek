import React, { useCallback, useState, } from "react";
import './Calculator.css';
function Counter()
{
    let [count,setcount]=useState('');
    let [otherCounter,setOtherCounters]=useState(0);

    const one = useCallback(()=>{
     setcount(count+='1');
    },[count]);

    const two = useCallback(()=>{
     setcount(count+='2');
    },[count]);

    const three = useCallback(()=>{
        setcount(count+='3');
       },[count]);

       const four = useCallback(()=>{
        setcount(count+='4');
       },[count]);

       const five = useCallback(()=>{
        setcount(count+='5');
       },[count]);

       const six = useCallback(()=>{
        setcount(count+='6');
       },[count]);

       const seven = useCallback(()=>{
        setcount(count+='7');
       },[count]);

       const eight = useCallback(()=>{
        setcount(count+='8');
       },[count]);
       const nine = useCallback(()=>{
        setcount(count+='9');
       },[count]);

       const zero = useCallback(()=>{
        setcount(count+='0');
       },[count]);

       const add = useCallback(()=>{
        setcount(count+='+');
       },[count]);

       const sub = useCallback(()=>{
        setcount(count+='-');
       },[count]);

       const mul = useCallback(()=>{
        setcount(count+='*');
       },[count]);

       const madulo = useCallback(()=>{
        setcount(count+='%');
       },[count]);

       const div = useCallback(()=>{
        setcount(count+='/');
       },[count]);

       const clear = useCallback(()=>{
        setcount(count='');
       },[count]);

       const equal = useCallback(()=>{
        setcount(count=eval(count));
       },[count]);
   
    
    return(<>
    <section className="total">
    {/* Text :{count} */}
    <input type="text" value={count}></input>
    <div className="but">
    <button onClick={one}>1</button>   
    <button onClick={two}>2</button>
    <button onClick={three}>3</button>
    <button onClick={add}>+</button><br></br>
    <button onClick={four}>4</button>
    <button onClick={five}>5</button>
    <button onClick={six}>6</button>
    <button onClick={sub}>-</button><br></br>
    <button onClick={seven}>7</button>
    <button onClick={eight}>8</button>
    <button onClick={nine}>9</button>
    <button onClick={mul}>*</button><br></br>
    <button onClick={zero}>0</button>
   <button onClick={div}>/</button>
  <button onClick={madulo}>%</button>
  
    <button onClick={equal}>=</button><br></br>
    <button onClick={clear}>C</button>

    </div>
    </section>
    </>);
}
export default Counter;