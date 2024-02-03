import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigator = useNavigate();
    const handleMain = () =>{
        navigator("/")
    }
    const handleAbout = () =>{
        navigator("/about")
    }
    return (
        <>
            <h1>로그인페이지</h1>
            <button onClick={handleMain}>메인페이지 이동</button>
            <button onClick={handleAbout}>소개페이지 이동</button>
        </>
    );
}

export default Login;