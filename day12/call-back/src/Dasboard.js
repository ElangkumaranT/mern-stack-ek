import React,{useState} from "react";
function  Dasboard()
{
    const [data,setData]=useState({});
    const [area,setArea]=useState({});

    const weatherApiUrl = 'https://'



    return (<> Weather Dasboard
    <br/>
    {weatherApiUrl}

    <div className="searchCity">
        <input className="serchcity" type="text"onChange={event =>setArea(event.target.value)} placeholder="enter the required location"/>
    </div>
    <br/>
    Current Location: {area}
    <div className="weathersummary">
        <div className="temperatureValue">

        </div>
    </div>
    </>)
}