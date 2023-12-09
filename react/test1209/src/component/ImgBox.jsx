import React from "react";

function ImgBox(props) {
    return(
        <div className="imgBox">
            <img src={props.url} alt="" />
            <div className="textBox">
                <h4>{props.title}</h4>
                <p className="hash">{props.hash}</p>
                <p><strong>{props.price}</strong>원~</p>
            </div>
        </div>
    )
}

export default ImgBox;