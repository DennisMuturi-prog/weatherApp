import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import ListGroup from './components/ListGroup';
import LoadingScreen from './components/LoadingScreen';
import DataList  from './components/DataList';
import ForeCastWeather from './components/ForeCastWeather';
import NavBar from './components/NavBar';
import TomorrowWeather from './components/TomorrowWeather';
import Next3days from './components/Next3days';
function App() {
  const [weatherData,setWeatherData]=useState('');
  const [forecastWeatherData,setForecastWeatherData]=useState('');
  const [tomorrowWeatherData,setTomorrowWeatherData]=useState('');
  const [next3daysweatherData,setNext3daysweatherData]=useState('');
  const [location,setLocation]=useState('Nairobi');
  const [loading,setLoading]=useState(false);
  const [autoComplete,setAutoComplete]=useState([]);
  const [chosenNav,setChosenNav]=useState('today');
  useEffect(()=>{
    handleButtonClick();
  },[])
  const searchAutoComplete=async ()=>{
    const response= await fetch(`http://api.weatherapi.com/v1/search.json?key=9c3c258f4f084a8ebfb122017240801&q=${location}`);
    const res=await response.json();
    //console.log(res);
    return res;
  }
  const fetchForeCastData=async ()=>{
    const response= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9c3c258f4f084a8ebfb122017240801&q=${location}&days=3`);
    const res=await response.json();
    console.log(res);
    return res;
  }

//fetchData();
const handleButtonClick=async ()=>{
  setLoading(true);
  const weatherData= await fetchForeCastData();
  const forecastWeatherData=weatherData.forecast.forecastday[0].hour;
  const tomorrowweatherdata=weatherData.forecast.forecastday[1].day;
  const next3daysdata=weatherData.forecast.forecastday;
  setWeatherData(weatherData);
  setForecastWeatherData(forecastWeatherData);
  setTomorrowWeatherData(tomorrowweatherdata);
  setNext3daysweatherData(next3daysdata);
  setLoading(false);
  //console.log(next3daysdata);
}
const handleChange=async (e)=>{
  setLocation(e.target.value);
  if(location){ 
    const autoCompleteLocations=await searchAutoComplete();
    setAutoComplete(autoCompleteLocations);
  }
  
}
const isLater=(testDate)=>{
  const now=new Date();
  const later=new Date(testDate);
  //console.log(testDate);
  //console.log(now)
  if(later>now){
    return true;
  }
  else{
    return false;
  }

}
const changeChosenNav=(newStatus)=>{
  setChosenNav(newStatus);
}
  return (
    <div><h1>weather App <span>{chosenNav}</span></h1>
    <h2>{location}</h2>
    <NavBar changeChosenNav={changeChosenNav}/>
    <DataList   handleChange={handleChange} handleButtonClick={handleButtonClick} autoComplete={autoComplete} />
    {
      chosenNav=='today'?
        loading?<LoadingScreen/>:weatherData && <div className='TodayWeather'><ListGroup currentWeatherData={weatherData.current}/>{forecastWeatherData.map((hourData,index)=>{
        if(isLater(hourData.time)){
          return <ForeCastWeather key={index} foreCastHourlyWeatherData={hourData}/>
        }
        })}</div>
        :chosenNav=='tomorrow'?<TomorrowWeather tomorrowWeatherData={tomorrowWeatherData} />:<div className='next3days'>{next3daysweatherData.map((eachday,index)=><Next3days key={index} next3days={eachday.day} date={eachday.date}/>)}
        </div>
      
    }
      
    </div>
       
  )
}

export default App
