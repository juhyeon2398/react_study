import { React,useState } from "react";


const Counter =()=>{
    let count1 = 0;
    const [count2,setCount2] = useState(0)
    const [count10,setCount10] = useState(5)

    const countPlusHandle =()=>{
        count1++;
        
        console.log('countPlusHandle  count1:', count1)
        setCount2(count2+1);
        setCount10(count10+1);
    }

    const countMinusHandle =()=>{
        if(count2 > 0){
        setCount2(count2-1);
        }
        if(count10 > 0){
        setCount10(count10-1);
        }
    }
    return (
        <div>
            <div>일반변수 {count10}</div>
            <div>state변수 {count2}</div>
            <button onClick={countPlusHandle}>숫자 증가</button>
            <button onClick={countMinusHandle}>숫자 감소</button>
        </div>
    )
}


export default Counter;