import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

    let navigate = useNavigate ();
    const goDetail = () =>{
        navigate(`/product/${item.id}`);
    }
  return (
    <div className='productCard' onClick={goDetail}>
        <img src={item?.img} alt="" />
        <div>{item?.title}</div>
        <div>\{item?.price}</div>
        <div className='itemType'> 
            {item?.new === true ? <span>신상품</span> : ''}
            {item?.choice === true ? <span>추천상품</span> : ''}
        </div> 
    </div>
  )
}

export default ProductCard;