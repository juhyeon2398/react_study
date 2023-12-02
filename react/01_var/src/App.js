import './App.css';
import spImg from './images/spring.jpg';
import winImg from './images/winter.jpg';


let num = 10;
function App() {
  return (
    <div>
      <div className="App">
        <h1>위건 웹서비스</h1>
        <h2>현재 num값은{num}</h2>
        <img className='' src={spImg} alt="" />
      </div>
      <div className='test'>
        <h1>겨울이미지</h1>
        <hr/>
        <img className='' src={winImg} alt="" />
      </div>
    </div>
  );
}

export default App;
