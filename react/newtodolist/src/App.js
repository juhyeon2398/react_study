import './App.css';
import React,{useState} from 'react';
import Header from './component/Header';
import FormWrap from './component/FormWrap';
import ListWrap from './component/ListWrap';

function App() {
  const [todoData,setTodoData] = useState([]);
  const [value,setValue] = useState('');
  return (
    <div className="App">
      <div className="todoContent">
        <Header todoData={todoData} setTodoData={setTodoData}/>
        <FormWrap todoData={todoData} setTodoData={setTodoData} value={value} setValue={setValue}/>
        <ListWrap todoData={todoData} setTodoData={setTodoData}/>
      </div>
    </div>
  );
}

export default App;
