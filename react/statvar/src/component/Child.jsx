import React, { useState } from "react";
import GrandChild from "./GrandChild";

const Child =()=>{
    console.log("자식등장~")
    const [count,setCount] = useState(0)

    const update =()=>{
        setCount(count + 1);
    }
    return (
        <div>
            <h1>자식 컴포넌트</h1>
            <div>{count}</div>
            <button onClick={update}>변경</button>
            <GrandChild/>
        </div>
    )
}

export default Child;