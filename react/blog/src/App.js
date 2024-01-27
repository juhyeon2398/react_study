import React, { useRef, useState } from 'react';
import './App.css';
// import Ref from "./component/Ref";
import BlogInsert from "./component/BlogInsert";
import BlogList from './component/BlogList';

function App() {

  const [data,setData] = useState([])
  
  const dataId = useRef(1);
  
  //추가하기
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

  //삭제하기
  const handleDelete = (targetId) =>{
    const dataModify = data.filter(el => el.id !== targetId)
    setData(dataModify)
  }

  //수정하기
  const handleEdit = (targetId,newContent) => {
    setData(
      data.map(el => targetId === el.id ? {...el,content:newContent} : el)
    )
  }
  
  return (
    <div className="App">
      {/* <Ref/> */}
      <BlogInsert handleInsert={handleInsert}/>
      <BlogList handleEdit={handleEdit} handleDelete={handleDelete} data={data}/>
    </div>
  );
}

export default App;
