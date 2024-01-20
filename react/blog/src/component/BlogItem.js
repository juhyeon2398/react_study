import React from 'react'

const BlogItem = ({listData,handleDelete}) => {

    const itemDelete = () =>{
        if(window.confirm(`ID=${listData.id}를 삭제합니까?`)){
            handleDelete(listData.id)
        }
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
            <div className='content'>
                {listData.content}
            </div>
            <div>
                <button onClick={itemDelete}>삭제하기</button>
                <button>수정하기</button>
            </div>
        </div>
    )
}

export default BlogItem;