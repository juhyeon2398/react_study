const ListWrap = ({todoData,setTodoData}) => {
    
    //리스트 선택 state
    const handleChk = (id) =>{  
        const newTodoData = todoData.map(data => {
            if(id === data.id){
                data.checked = !data.checked;
            }
            return data;
        })
        setTodoData(newTodoData);
    }

    //리스트 삭제
    const handleDelete = (id) =>{
        const newTodoData = todoData.filter(data => {
            if(id !== data.id){
                return data;
            }
        })
        setTodoData(newTodoData);
    }

    //리스트 수정
    const handleModify = (id) =>{
        const items = document.querySelector("#chk"+id);
        todoData.map(data => {
            if(id === data.id){
                data.modify = !data.modify;

                if(data.modify){
                    items.nextElementSibling.innerHTML = `<input type='text' id='re${data.id}' value='${data.title}'>`;
                }else{
                    data.title = document.querySelector(`#re${data.id}`).value
                    items.nextElementSibling.innerHTML = data.title;
                }
            }
            
        })
    }

    return (
        <div className="listBox">
            {
                todoData.map(data => (
                    <div className="listForm">
                        <label htmlFor={"chk"+data.id}>
                            <input type="checkbox" name="" onChange={() => handleChk(data.id)} checked={data.checked} id={"chk"+data.id} /> <p>{data.title}</p>
                        </label>
                        <div className="btn">
                            <button onClick={() => handleModify(data.id)}>&#x2713;</button>
                            <button className="deleteBtn" onClick={() => handleDelete(data.id)}>&times;</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListWrap;