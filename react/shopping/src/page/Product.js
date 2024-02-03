import React from 'react';
//state 변수와 유사
import { useSearchParams } from 'react-router-dom'; 

const Product = () =>{
    //url에서 'q(query)'값을 읽음
    const [query,setQuery] = useSearchParams();
    console.log('Product  query:', query.get("q"))
    return (
        <>
            <h1>제품페이지입니다.</h1>
        </>
    );
}

export default Product;