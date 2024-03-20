
import React, { useState,useEffect } from 'react';
import Descriptions from './descriptions';
import Footer from './footer';
import { getFormattedWeatherData } from './weatherService';

function App() {

  type weathertype = {
    name : string | null,
    temp : number | null,
    iconURL : string ,
    country : string| null,
    description: string | null

  }
  const weatherdata = {
    name : "",
    temp : null,
    iconURL : "",
    country : "",
    description: ""
  }
  const [city,setCity] = useState("lucknow");
  const [weather,setWeather]=useState<weathertype>(weatherdata);
  const [units,setUnits]=useState("metric");
  const [bg,setBg]=useState("./assets/hot.jpg");


  useEffect(()=>{
   const fetchWeatherData = async () => {
    console.log(city)
   const data = await getFormattedWeatherData(city,units);
   if ( data  ){
   setWeather(data);
   }
   const threshold = units === 'metric' ? 20 :60;
 if (data?.temp <= threshold) setBg("./assets/cold.jpg");
 else setBg("./assets/hot.jpg");
   };
   fetchWeatherData();
 },[units,city] );

 const handleUnitsClick = (e:any) => {
   const button = e.currentTarget;
   const currentUnit = button.innerText.slice(1);

   const isCelsius = currentUnit === "C";
   button.innerText = isCelsius? "°F" : "°C";
   setUnits(isCelsius ? "metric" : "imperial");
   
 };

 const enterKeyPressed = (e:any) => {
  if (e.keyCode === 13){
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }
 };

  return (
   <>
   <div className='w-full h-screen bg-center bg-cover'  style={{ backgroundImage: `url(${bg})` }}>
      <div className='w-full h-full bg-[bg-[rgba(0,0,0,0.7)]]'>
        {weather && (
          <div className='max-w-[800px] m-auto h-full flex flex-col items-center justify-between p-4'>
            <div className='w-full text-white rounded-[4rem]'>
              <div className='flex items-center justify-between p-1 rounded-[0.4rem] bg-[rgba(0,0,0,0.7)]'>
                <input className='rounded-[0.4rem] border-[1px] border-white bg-transparent p-[0.5rem] text-center text-[1.2rem] font-[200] color-white focus:outline-none' onKeyDown={enterKeyPressed} type='text' name='city' placeholder='Enter City...'></input>
                <button className='py-[10px] px-[50px] rounded-[0.6rem] border-0 text-[1.2rem] font-[500] bg-white overflow-x-hidden text-black hover:cursor-pointer hover:bg-lightgray' onClick={(e) => handleUnitsClick(e)}> °F </button>
              </div>
            </div>
            <div className='w-full text-white rounded-[4rem]'>
              <div className='flex items-center justify-between p-8 rounded-[0.4rem] bg-[rgba(0,0,0,0.7)]'>
                <div className='flex flex-col justify-center items-center'>
                {/* text-transform: capitalize; */}
                  <h3 className='font-[200] text-[15px]'>{`${weather.name},${weather.country}`}</h3>
                  <img className='w-[120px] h-[20vh]' src={weather.iconURL} alt='weather icon'></img>
                  <h3 className='font-[200] text-[15px]'>{weather.description}</h3>
                </div>
                <div className="temperaure">
                  <h1 className='text-[60px]'>{`${ weather.temp?.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</h1>
                </div>
              </div>
              {/* bottom description */}
              <Descriptions weather={weather} units={units}></Descriptions>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
export default App;