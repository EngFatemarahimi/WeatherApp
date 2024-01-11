import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from "../Assets/cleaning.png";
import cloud_icon from "../Assets/cloudy.png";
import drizzle_icon from "../Assets/rainy.png";
import snow_icon from "../Assets/sun.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "..//Assets/windy.png";
import rain_icon from "../Assets/hot.png";


const WeatherApp = () => {
         
   let api_key ="34b7e49444e896488456cd92c8b71c6f";

   const [wicon, setWicon] = useState(cloud_icon);
   
  
    const search = async () => {
         const element = document.getElementsByClassName("cityInput")
          if(element[0].value==="")
          {
            return 0;
          }
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
         
         let response = await fetch(url);
         let data = await response.json();

         const humidity = document.getElementById("humidity-percent");
         const wind = document.getElementsByClassName("wind-rate");
         const temprature = document.getElementsByClassName("weather-temp");
         const location = document.getElementsByClassName("weather-location");
   
   
        humidity[0].innerHTML = data.main.humidity+ " % ";
        wind[0].innerHTML = data.wind.speed+ " km/h ";
        temprature[0].innerHTML = data.main.temprature+ " c";
        location[0].innerHTML = data.name.location;

        if(data.weather[0].icon==="04d" || data.weather[0].icon==="01n" ){
             setWicon(clear_icon )
        }
        }

  return (
    <div className='container'>
    <div className='top-bar'>
      <input type='text' className='cityInput' placeholder='Search'  />
        <div className='search_icon' onClick={ ()=> {search()}}>
        <img src={search_icon} alt="" />
        </div>
    </div>    
     <div className='weather-image'>
     <img src={wicon} alt=""  />
     </div>
     <div className='weather-temp'> 24 c </div>
     <div className='weather-location'> London </div>
     
     <div className=' date-container'>
     <div className='element'>
     <img src= {humidity_icon}  alt=" " className='icon' />
     <div className='data'>
        <div className="humidity-percent">64%</div>
        <div className='text'> Humidity </div>
         </div>
     </div>

     <div className='element'>
     <img src={ wind_icon } alt=" " className='icon' />
     <div className='data'>
        <div className="wind-rate">15 km/h</div>
        <div className='text'> Wind Speed </div>
         </div>
     </div>
      
     </div>      
          
    </div>
  )
}

export default WeatherApp
