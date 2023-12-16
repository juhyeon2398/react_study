import React from "react";

const Card = ({imgPath,post,title,sale,price}) => {
    return (
        <div className="card">
            <div className="imgbox">
                <img src={imgPath} alt="제품" />
            </div>
            <div className="info">
                <h3>{post}</h3>
                <h2>{title}</h2>
                <span>{sale}</span>
                <span>{price}원</span>
            </div>
        </div>
    )
}

export default Card;