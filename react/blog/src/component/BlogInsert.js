import React, { useRef, useState } from 'react';

const BlogInsert = ({handleInsert}) =>{
  
    const titleInput = useRef();
    const autherInput = useRef();
    const contentInput = useRef();
    const [state, setState] = useState({
        title:"",
        auther:"",
        content:"",
        grade:1,
    })
    
    
    //저장하기
    const handleSave = () =>{
        if(state.title.length < 1){
            titleInput.current.focus();
            return false;
        }
        
        if(state.auther.length < 1){
            autherInput.current.focus();
            return false;
        }
        
        if(state.content.length < 10){
            contentInput.current.focus();
            return false;
        }

        handleInsert(state.title,state.auther,state.content,state.grade);

        alert("저장되었습니다.");
        
        setState({
            title:"",
            auther:"",
            content:"",
            grade:1,
        })
    }
    
    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    return (
        <div className='blogInsert'>
            <h1>Today's Blog</h1>
            <div>
                <input ref={titleInput} type="text" name="title" id="" value={state.title} placeholder='블로그 제목을 입력하세요.' onChange={handleChange}/>
            </div>
            <div>
                <input ref={autherInput} type="text" name="auther" value={state.auther} placeholder="블로그 작성자를 입려하세요." onChange={handleChange}/>
            </div>
            <div>
                <textarea ref={contentInput} name="content" value={state.content} placeholder='10자 이상 입력하세요.' onChange={handleChange}/>
            </div>

            <div>
                <span>평가 점수 : </span>
                <select name="grade" id="" value={state.grade} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

            </div>
            <button onClick={handleSave}>저장하기</button>
        </div>
    )
}


export default BlogInsert;