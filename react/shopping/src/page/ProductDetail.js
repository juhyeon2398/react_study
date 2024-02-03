import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () =>{

    //아이디만 구조분해
    const {id,num} = useParams();

    return (
        <>
            <h1>제품{id}의 상세페이지입니다. {num}</h1>
        </>
    );
}

export default ProductDetail;