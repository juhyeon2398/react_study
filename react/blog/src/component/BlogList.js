import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({data,handleDelete,handleEdit}) => {
    return (
        <div className='blogList'>
            <h2>리스트 입니다.</h2>
            <h3>{data.length}개의 블로그 글이 있습니다.</h3>
            {
                data.map(el => (
                    <BlogItem handleEdit={handleEdit} handleDelete={handleDelete} listData={el} key={el.id}/>
                ))
            }
        </div>
    )
}

export default BlogList;