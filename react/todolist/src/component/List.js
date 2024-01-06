import React from 'react';

const List = ({todoData,setTodoData}) => {
    const gStyle = (chk) => {
        return {
          color: chk ? '#f00' : '#222',
          textDecoration: chk ? 'line-through' : 'none',
        }
    }

    const handleChk = (id) =>{
        let newTodoData = todoData.map(data=>{
          if(id === data.id){
            data.checked = !data.checked;
          }
          return data;
        })
        setTodoData(newTodoData);
      }
      

    const btnStyle = {
        border:'none',
        color:'#222',
        background:'#ccc',
        padding:'5px 10px',
        cursor:'pointer',
    }

    const handleDelete = (id) => {
        let newTodoData = todoData.filter( data => id !== data.id)
        setTodoData(newTodoData);
    }
    
    return (
        todoData.map((data) => (
            <div className="checkList" key={data.id} >
                <label htmlFor={'chk'+data.id} style={gStyle(data.checked)}>
                    <input type="checkbox" name="" id={'chk'+data.id} onChange={()=>handleChk(data.id)} /> {data.title}
                </label>
                <div className="btn">
                    <button style={btnStyle}>수정하기</button>
                    <button onClick={()=>handleDelete(data.id)} style={btnStyle}>삭제하기</button>
                </div>
            </div>
        ))
    )
}

export default List;