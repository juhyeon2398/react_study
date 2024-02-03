import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <div className='header'>
            <div className='gnb'>
                <Link to="/">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                </Link>

                <Link>영화</Link>
                <Link>TV프로그램</Link>
                <Link>인물</Link>
                <Link>더보기</Link>
            </div>

            <div className='btns'>
                <Link to='/login'>로그인</Link>
                <Link>회원가입</Link>
            </div>
        </div>
    )
}

export default Header;