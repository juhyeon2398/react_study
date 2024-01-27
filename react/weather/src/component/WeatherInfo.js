import React from 'react';

const WeatherInfo = ({weather}) => {
    return (
        <div>
            <h2>{weather?.name}</h2>
            <h2>{weather?.main.temp}썹씨/ {Math.floor(weather?.main.temp*1.8+32)}화씨</h2>
            <h2>{weather?.weather[0].description}</h2>
            <h2>최고온도 : {weather?.main.temp_max}</h2>
            <h2>최저온도 : {weather?.main.temp_min}</h2>
            <h2>습도 : {weather?.main.humidity}</h2>
            <h2>풍속 : {weather?.wind.speed}</h2>
        </div>
    )
}

export default WeatherInfo;