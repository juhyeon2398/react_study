import React from "react";

function Card(props){
    console.log(props);

    return(
        <div className="card">
            <img src={props.url} alt="이미지1"/>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <p>{props.price}원~</p>
        </div>
    )
}

export default Card;