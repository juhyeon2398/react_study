import React from 'react';

const Form = ({value,setTodoData,todoData,setValue}) => {

    const handleAppend = (e) =>{
        e.preventDefault();//새로고침 false
        if(value == ''){
            alert("내용을 입력해주세요.")
            return false;
        }
        let newTodo = {
            id:Date.now(),
            title:value,
            checked:false,
        }
        setTodoData([...todoData,newTodo]);
        setValue("");
    }
    
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    return (
        <form onSubmit={handleAppend}>
            <div className="inputBox">
                <input type="text" value={value} onChange={handleChange} placeholder='오늘 할일을 입력하세요.'/>
                <input type="submit" value="추가" />
            </div>
        </form>
    )
}

export default Form;