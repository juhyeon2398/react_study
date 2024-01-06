import './App.css';
import React, { useState } from 'react'
import Header from './component/Header';
import List from './component/List';
import Form from './component/Form';

function App() {
  const [todoData,setTodoData] = useState([]);
  const [value,setValue] = useState("");
  
  return (
    <div className="container">
      <div className="todoBox">
          <Header todoData={todoData} setTodoData={setTodoData}/>
          <List todoData={todoData} setTodoData={setTodoData} />
          <Form todoData={todoData} setTodoData={setTodoData} value={value} setValue={setValue}/>
      </div>
    </div>
  );
}

export default App;
