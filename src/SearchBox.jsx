import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

const SearchBox = ({upDateInfo}) => {
  const [city,setCity]=useState("");
  const [error,setError]=useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeatherInfo = async () => {
    try{
  let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  const result={
    city:city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,
  }
  console.log(result);
  return result;
} catch(err){
  throw err;
}

};

  
 let handleInput=(event)=>{
  setCity(event.target.value);
 }

 let handleSubmit= async(event)=>{
  try{
  event.preventDefault();
  setCity("");
  let newInfo= await getWeatherInfo();
  upDateInfo(newInfo);
  }
  catch(err){
    setError(true);
  }
 }



  return (
    <div className='SearchBox'>
       <form onSubmit={handleSubmit}> 
        <TextField id="city" placeholder="City name" variant="outlined" required value={city} onChange={handleInput} className='placeholder:text-gray-500 placeholder:italic' />
        <br /><br />
         <Button variant="contained" type='submit'>Search</Button>
       </form>
       <br />
       {error && <p style={{color:"red"}}>No Such Place Exist</p>}
    </div>
  )
}

export default SearchBox