import React,{ useState } from 'react';
import './App.css';
import TodoBoard from "./component/TodoLIstBoard";


function App() {
  const [inputValue, setInputValue] = useState("");

  const [todoList,setTodoList] = useState([]);
  const handleAppend = () =>{
    setTodoList([...todoList, inputValue]);
  }
  console.log(todoList)
  return (
    <div>
      <div className="container">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAppend}>추가</button>
        <TodoBoard todoList={todoList}/>
      </div>
    </div>
  );
}

export default App;
