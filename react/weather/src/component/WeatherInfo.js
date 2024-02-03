import React from 'react';

const WeatherInfo = ({weather}) => {
    
    let cloud = "";
    if(weather){
        switch(weather.weather[0].description){
            case "overcast clouds":
                cloud = "흐림";
                break;
            case "heavy intensity rain":
                cloud = "강한 비";
                break;
            case "light rain":
                cloud = "약한 비";
                break;
            case "broken clouds":
                cloud = "구름";
                break;
            default:
                cloud = "";
                break;
        }
    }

    return (
        <div className='weatherInfo'>
            <h2>{weather?.name}</h2>
            <h2>{weather?.main.temp}썹씨/ {Math.floor(weather?.main.temp*1.8+32)}화씨</h2>
            <h2>{cloud}</h2>
            <h2>최고온도 : {weather?.main.temp_max}</h2>
            <h2>최저온도 : {weather?.main.temp_min}</h2>
            <h2>습도 : {weather?.main.humidity}</h2>
            <h2>풍속 : {weather?.wind.speed}</h2>
        </div>
    )
}

export default WeatherInfo;