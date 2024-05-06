import React,{useState} from "react";
import axios from 'axios';
import './Dasboard.css';
function  Dasboard()
{
    const [data,setData]=useState('');
    const [area,setArea]=useState('chennai');
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${'d20a0f86d3ca19d0c23d7e1b417219d5'}`

    const searcharea =(e)=>{
        if(e.key==='Enter')
        {
            axios.get(weatherApiUrl)
            .then((response)=>{
                
                console.log(response.data);
                setData(response.data);
               
            });
        }
    };
    return (<> 
    <div className="total">
    <h1>Weather Dasboard</h1>
    <div>
   <input type="text"  value={area} onChange={e=>setArea(e.target.value)}onKeyDown={searcharea} placeholder="enter a location"/> 
    </div>
    <p>
    <h2> current location:{area} </h2>
    
    <div className="elements">
   <h2> temparature id:{data.main ? data.main.temp.toFixed() : null}</h2>
  
    <h2>Feels Like:{data.main ? data.main.feels_like.toFixed(5):null}</h2>
    <h2>Humidity :{data.main ? data.main.humidity:null}</h2>
    <h2>temp.max:{data.main ? data.main.temp_max:null}</h2>
    <h2>temp.min:{data.main ? data.main.temp_min:null}</h2>

     
    </div>
    </p>
</div>
    
    
    
    </>);
    
}

export default Dasboard;