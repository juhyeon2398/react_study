import React,{useState} from "react";

const Argcounter = () =>{
    console.log("Arg함수 호출")
    const [acount,setAcount] = useState(0);

    const updateHandel =(arg)=>{
        setAcount(acount+arg);
    }
    return (
        <div>
            <button onClick={()=>updateHandel(1)}>증가</button>
            <span>{acount}</span>
            <button onClick={()=>updateHandel(-1)}>감소</button>
        </div>
    )
}

export default Argcounter;