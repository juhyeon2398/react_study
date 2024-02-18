import React from 'react'
import ProductDetail from './ProductDetail'
import { Navigate } from 'react-router-dom'

const Private = ({author}) => {

    //리다이렉션 기능
    return author === true ?(
        <ProductDetail/>
    ):(
        <Navigate to="/login"/>
    )
}

export default Private