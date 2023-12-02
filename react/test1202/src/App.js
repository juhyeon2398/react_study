import img01 from './images/img01.jpg';
import img02 from './images/img02.jpg';
import img03 from './images/img03.jpg';
import img04 from './images/img04.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className='evt_bnr'>
          <p>
            통통언니들의 패션할인<br/>
            <strong>90%</strong>를 진행합니다.
          </p>
      </div>

      <div className="App">
         <h1>NEW ITEM</h1>
         <h2>신상품 일동안 5%할인</h2>
         <div>
            <img src={img01} alt="" />
            <dl>
              <dt>비스코스펀칭브이넥가디건</dt>
              <dd>22500원</dd>
            </dl>
         </div>
         <div>
            <img src={img02} alt="" />
            <dl>
              <dt>썸머코튼반팔카라셔츠</dt>
              <dd>14400원</dd>
            </dl>
         </div>
         <div>
            <img src={img03} alt="" />
            <dl>
              <dt>오픈카라넥핀턱브라우스(반팔ver)</dt>
              <dd>14300원</dd>
            </dl>
         </div>
         <div>
            <img src={img04} alt="" />
            <dl>
              <dt>쉬폰프릴윙브라우스</dt>
              <dd>12600원</dd>
            </dl>
         </div>
      </div>

      <div className='evt_bnr'>
          <p>
            통통언니들의 패션할인<br/>
            <strong>90%</strong>를 진행합니다.
          </p>
      </div>

    </div>
  );
}

export default App;
