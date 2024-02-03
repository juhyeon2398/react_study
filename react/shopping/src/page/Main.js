import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Main = () =>{
    const navigator = useNavigate(); //선언 필요
    const goLogin = () =>{  //버튼 활용시 useNavigate필요
        navigator("/login");
    }
    return (
        <>
            <h1>메인입니다.</h1>
            <Link to="/product">제품리스트 페이지 이동</Link>
            <button onClick={goLogin}>로그인페이지로 이동</button>
        </>
    );
}

export default Main;