import React, { useState } from "react";

const Address =()=>{
    const [irum,setIrum] = useState(""); //문자형
    const [personList,setPersonList] = useState([]); //배열
    const addPersonHandle =()=>{
        const newList = [
            ...personList,
            {name: irum,}
        ]
        
        setPersonList(newList);
    }
    
    return (
        <div>
            <h1>주소록</h1>
            <input type="text" name="" id="" value={irum} onChange={(e) =>{
                setIrum(e.target.value)
            }}/>

            <button onClick={addPersonHandle}>추가</button>
            {
                personList.map((el) => <p>{el.name}</p>)
            }
        </div>
    );
}

export default Address;