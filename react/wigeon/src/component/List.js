import React from 'react';

const List = ({movieData}) => {
    
    return (
        <>
            <div className="imgBox">
                <img src={"https://image.tmdb.org/t/p/original"+movieData.poster_path} alt="" />
            </div>
            <div className="infoBox">
                <h3>{movieData.title}</h3>
                <p>{movieData.release_date}</p>
            </div>
        </>
    )
}


export default List;