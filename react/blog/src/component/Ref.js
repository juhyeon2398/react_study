import React, { useRef, useState } from 'react';

const Ref = () =>{

    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef("");
    let countLet = 0;
    
    const handleIns = () =>{
        setCount(count + 1);
    }
    
    const handleRefIns = () =>{
        countRef.current++;
    }

    const handleLetIns = () =>{
        countLet++;
    }

    const login = () =>{
        alert(`안녕하세요. ${inputRef.current.value}님`)
        inputRef.current.focus();
    }

    return(
        <div>
            <p>state변수 : {count}</p>
            <p>Ref변수 : {countRef.current}</p>
            <p>일반변수 : {countLet}</p>
            <button onClick={handleIns}>state값 증가</button>
            <button onClick={handleRefIns}>Ref값 증가</button>
            <button onClick={handleLetIns}>Lef값 증가</button>

            <div>
                <input ref={inputRef} type="text" name="" id="" placeholder='아이디 입력' />
                <button onClick={login}>로그인 버튼</button>
            </div>
        </div>
    )

}

export default Ref;