import React, { useRef, useState } from 'react';
import './App.css';
// import Ref from "./component/Ref";
import BlogInsert from "./component/BlogInsert";
import BlogList from './component/BlogList';

function App() {

  const [data,setData] = useState([])
  
  const dataId = useRef(1);
  
  const handleInsert = (title,auther,content,grade) => {
    const date = new Date().getTime();
    const newItem = {
      id:dataId.current,
      title,
      auther,
      content,
      grade,
      date,
    }
    dataId.current++;
    setData([newItem,...data]);
  }

  const handleDelete = (targetId) =>{
    const dataModify = data.filter(el => el.id !== targetId)
    setData(dataModify)
  }
  
  return (
    <div className="App">
      {/* <Ref/> */}
      <BlogInsert handleInsert={handleInsert}/>
      <BlogList handleDelete={handleDelete} data={data}/>
    </div>
  );
}

export default App;
