import './App.css';
import Header from './component/Header';
import Main from './page/Main';
import Login from './page/Login';
import About from './page/About';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>

        {/* URL의 파라메터 값을 읽을떄 */}
        <Route path='/productdetail/:id/:num' element={<ProductDetail/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
