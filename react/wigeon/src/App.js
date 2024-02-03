import './App.css';
import React,{ useEffect, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Main from './page/Main';
import Header from './page/Header';
import Footer from './page/Footer';
import MovieDetail from './component/MovieDetail';
import ClipLoader from "react-spinners/ClipLoader";
import Login from './page/Login';
import Join from './page/Join';

function App() {

  let [loading, setLoading] = useState(false);
  const [movieInfo,setMovieInfo] = useState([]);
  
  const movieAPI = async () =>{
    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=94a08a3ffe784cf92f01aa40978deae5&language=ko-KR"
    let res = await fetch(url)
    let data = await res.json();
    setLoading(true) //로딩
    setMovieInfo(data.results);
    setLoading(false) //랜더 완료
  }
  
  useEffect(()=>{
      movieAPI();
  },[])
  
  useEffect(()=>{
      movieAPI();
  },[movieInfo])
  

  return (

    (
      loading ? 
      <div className='load'>
          <ClipLoader
              // cssOverride={override}
              size={150}
              color={"#123abc"}
              loading={loading}
              speedMultiplier={1}
              aria-label="Loading Spinner"
              data-testid="loader"
          />
      </div>
      :
      <div className="App">
        {/* 헤더 */}
        <Header/>

        <Routes>
          <Route path="/" element={<Main movieInfo={movieInfo}/>}/>
          <Route path="/detail/:id" element={<MovieDetail movieInfo={movieInfo}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/join" element={<Join/>}/>
        </Routes>

        {/* 푸터 */}
        <Footer/>
      </div>
    )
  );
}

export default App;
