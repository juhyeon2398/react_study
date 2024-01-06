const ListWrap = ({todoData,setTodo}) => {

    const handleChk = () =>{

    }

    return (
        todoData.map(data => (
            <div className="listForm">
                <label htmlFor={"chk"+data.id}>
                    <input type="checkbox" name="" onChange={handleChk} checked={data.checked} id={"chk"+data.id} /> {data.title}
                </label>
                <div classname="btn">
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        ))
    )
}

export default ListWrap;