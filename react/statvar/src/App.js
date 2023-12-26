import './App.css';
import Child from "./component/Child"
import Form from './component/Form';
import Address from './component/Address';
import Sns from './component/Sns';

function App() {
  console.log("app 컴포넌트가 실행됨");
  return (
    <div className="App">
        {/* <h1>최상위 부모컴포넌트</h1> */}
        {/* <Child/>
        <Form/>
        <Address/> */}
        <Sns/>
    </div>
  );
}

export default App;
