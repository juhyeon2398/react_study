import React, { useState } from 'react';


const WeatherSearch= ({setCity}) => {
    const [search,setSearch] = useState("");

    return (
        <div className='citySearch'>
            <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => setCity(search)}>검색</button>
        </div>
    )
}

export default WeatherSearch;