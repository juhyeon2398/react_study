import './App.css';
import React, { useEffect, useState } from 'react';
import {Route,Routes} from "react-router-dom";
import Header from './component/Header';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import Private from './page/Private';

function App() {
  const [author, setAuthor] = useState(false);
  
  useEffect(()=>{
    console.log('App  author:', author)
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthor={setAuthor}/>}/>
        <Route path="/product/:id" element={<Private author={author}/>}/>
      </Routes>
    </div>
  );
}

export default App;
