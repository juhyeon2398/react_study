import React from 'react';
const WeatherBtn = ({cities,setCity}) => {
    
    return (
        <div className='weatherBtn'>
            <button onClick={()=>setCity('')}>현재위치</button>
            {
                cities.map((el,idx)=> <button onClick={()=>setCity(el)} key={idx}>{el}</button>)
            }
        </div>
    )

}

export default WeatherBtn;