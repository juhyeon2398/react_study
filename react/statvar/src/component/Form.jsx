import React, { useState } from "react";

const Form =()=>{
    const [num,setNum] = useState(0); //숫자형
    const [name,setName] = useState(""); //문자형
    const [isChk,setIsChk] = useState(false); //논리형

    return (
        <div>
            <h1>주소록</h1>
            <div>
                <label htmlFor="number">번호</label><input id="number" type="number" value={num} onChange={(e) => {
                    setNum(e.target.value)
                }}/>
            </div>
            <div>
                <label htmlFor="name">이름</label><input id="name" type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
            </div>
            <div>
                <label htmlFor="isChk">체크</label><input id="isChk" type="checkbox" checked={isChk} onChange={(e) => {
                    setIsChk(e.target.checked)
                }}/>
                {isChk ? '체크 됨' : '체크 안됨'}
            </div>
        </div>
    )
}


export default Form;