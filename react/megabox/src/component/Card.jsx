import React from "react";

const Card = ({backdrop_path,title,release_date,vote_average,overview}) =>{
    const imgUrl = "https://www.themoviedb.org/t/p/w1280";
    return (
        <div className="card">
            <div className="imgBox">
                <img src={imgUrl+backdrop_path} alt="" />
                <p>{overview}</p>
            </div>
            <div className="info">
                <h2>{title}</h2>
                <span>평점 : {vote_average}</span>
                &emsp;
                <span>개봉일 : {release_date}</span>
            </div>
        </div>
    );
}

export default Card;