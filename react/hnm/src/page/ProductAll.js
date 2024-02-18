import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';

const ProductAll =() =>{

    const [productList, setProductList] = useState([]);

    const [query,setQuery] = useSearchParams();

    const getProduct = async () =>{
        let keywd = query.get("q");
        let url = "http://localhost:4000/products";
        let response = await fetch(url);
        let data = await response.json();
        
        setProductList(data);
    }
    
    // 데이터 불러오기
    useEffect(() => {
        getProduct();
    },[query])


    return (
        <div>
            <Container>
                <Row>
                    {
                        productList.map((menu) => (
                            <Col lg = {3}>
                                <ProductCard item={menu} key={menu.id}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll;