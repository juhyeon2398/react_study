import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  useEffect(()=>{
    getProductDetail();
  },[])

  const [product,setProduct] = useState(null);
  const [size,setSize] = useState("사이즈 선택");
  
  let {id} = useParams();
  
  const getProductDetail = async () =>{
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    //해당 상품 정보 데이터
    setProduct(data)
  };

  const handleSize = (size) =>{
    setSize(size)
  }


  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} alt="상품 이미지" />
        </Col>
          
        <Col>
          <div>{product?.title}</div>
          <div>\{product?.price}</div>
          <div>
            {product?.new == true ? <span>신상품</span> : ""}
            {product?.choice == true ? <span>추천</span> : ""}
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {size}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="javascript:void(0)" onClick={() => handleSize("사이즈 선택")}>사이즈 선택</Dropdown.Item>
              {product?.size.map(el => (
                <Dropdown.Item href="javascript:void(0)" onClick={() => handleSize(el)}>{el}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail