import React, { useEffect, useState } from 'react';

const Effect = () =>{
    const [count,setCount] = useState(0);
    const [irum,setIrum] = useState("");

    const handleCount = () =>{
        setCount(count + 1);
    }
    
    const handleChange = (e) =>{
        setIrum(e.target.value)
    }

    //마운트 될때 마다 실행
    useEffect(() => {
        console.log("랜더링 됨")
    })
    
    //마운트 될때만 한번 실행
    useEffect(() => {
        console.log("처음으로 마운트됨")
    },[])
    
    //카운트 값 변경시 실행
    useEffect(() => {
        console.log("카운트시 마운트")
    },[count])
    
    //
    useEffect(() => {
        console.log("이름이 변경됨")
    },[irum])

    return ( 
        <div>
            <button onClick={handleCount}>수정하기</button>
            <p>카운트 : {count}</p>

            <input type="text" name="" id="" value={irum} onChange={handleChange}/>
            <p>이름 : {irum}</p>
        </div>
    )
}

export default Effect;