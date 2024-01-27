import React,{ useEffect, useState } from 'react';
import './App.css';
import WeatherInfo from './component/WeatherInfo';
import WeatherBtn from './component/WeatherBtn';
import WeatherSearch from './component/WeatherSearch';

function App() {
  //날씨 정보 데이터
  const [weather,setWeather] = useState();
  const [city,setCity] = useState("");

  //도시명 배열변수
  const cities = ['Jeju','Busan','Seoul','Tokyo','New York','London','Paris'];
  

  const currentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      weatherInfo(lat, lon)
    });
  }
  
  //api 서버 접속하여 data입력
  const weatherInfo = async(lat,lon)=> {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=56775090f116b4be4b6402cb3c855f53`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  // 최초 1회 실행
  useEffect(()=>{
    currentLocation();
  },[])

  //
  const weatherCity = async() =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=56775090f116b4be4b6402cb3c855f53`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(()=>{
    if(city === ""){
      currentLocation();
    }else{
      weatherCity()
    }
  },[city])

  return (
    <div className="App">
      <WeatherSearch setCity={setCity}/>
      <WeatherInfo weather={weather}/>
      <WeatherBtn setCity={setCity} cities={cities}/>
    </div>
  );
}

export default App;
