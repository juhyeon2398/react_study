const ListControl = ({todoData,setTodoData}) => {
    
    const handleChkDelete = () =>{
        const newTodoData = todoData.filter(data => {
            if(!data.checked){
                return data;
            }
        })
        setTodoData(newTodoData);
    }

    return (
        <div className="controls">
            <button className="removeChk" onClick={handleChkDelete}>선택 삭제 <b>&times;</b></button>
        </div>
    )
}

export default ListControl;