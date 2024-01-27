import React, { useRef, useState } from 'react'

const BlogItem = ({listData,handleDelete,handleEdit}) => {

    const itemDelete = () =>{
        if(window.confirm(`ID=${listData.id}를 삭제합니까?`)){
            handleDelete(listData.id)
        }
    }

    //포커스
    const textFocus = useRef("");

    //글 수정 state
    const [isEdit,setIsEdit] = useState(false);

    //수정된 content state
    const [editContent,setEditContent] = useState(listData.content)

    //글 상태 변경
    const toggleIsEdit = () =>{
        setIsEdit(!isEdit);
        setEditContent(listData.content)
    }

    //수정 취소
    const handleQuitEdit = () => {
        setIsEdit(false);
    };

    //수정 완료
    const onEdit = () => {
        if(editContent.length < 10 ){
            alert("10자 이상 작성해주세요.");
            textFocus.current.focus();
            return false;
        }

        if(window.confirm(`${listData.id}번째의 글을 수정하시겠습니까?`)){
            handleEdit(listData.id,editContent)
        }
        setIsEdit(!isEdit);
    }


    return (
        <div key={listData.id}>
            <div className='info'>
                <p>번호 : {listData.id}</p>
                <p>제목 : {listData.title}</p>
                <p>작성자 : {listData.auther}</p>
                <p>평점 : {listData.grade}</p>
                <p>날짜 : {new Date(listData.date).toLocaleString()}</p>
            </div>
                {
                    isEdit?
                        <div className='content'>
                            <textarea ref={textFocus} onChange={(e) => setEditContent(e.target.value)} value={editContent} placeholder='10자 이상 작성해주세요.'></textarea>
                            <div className='btn'>
                                <button onClick={onEdit}>수정완료</button>
                                <button onClick={handleQuitEdit}>취소</button>
                            </div>
                        </div>
                    :
                    <div className='content'>
                        <p>{listData.content}</p>
                        <div className='btn'>
                            <button onClick={toggleIsEdit}>수정하기</button>
                            <button onClick={itemDelete}>삭제하기</button>
                        </div>
                    </div>
                }
           
        </div>
    )
}

export default BlogItem;