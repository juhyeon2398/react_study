const FormWrap = ({todoData,setTodoData,value,setValue}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();//새로고침 false

        let newData = {
            id : Date.now(),
            title: value,
            checked : false,
        }
        setTodoData([...todoData,newData]);
        setValue('');
    }

    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formBox">
                <input type="text" value={value} onChange={handleChange} placeholder="새로운 작업을 입력해주세요." />
                <input type="submit" value="추가" />
            </div>
        </form>
    )
}

export default FormWrap;