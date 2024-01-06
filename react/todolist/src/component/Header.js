import React from 'react';

const Header = ({todoData,setTodoData}) =>{

    const handleAllDelete = () => {
        setTodoData([]);
    }

    const handleSelectDelete = (chk) => {
        let newTodoData = todoData.filter(data => !data.checked)
        setTodoData(newTodoData);
    }

      
    return (
        <div className="titlebox">
            <h1>Today ToDo List</h1>
            <div className='btn'>
                <button onClick={handleSelectDelete}>선택삭제</button>
                <button onClick={handleAllDelete}>전체삭제</button>
            </div>
        </div>
    )
}

export default Header;