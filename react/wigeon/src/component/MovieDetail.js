import React from 'react'
import { useParams } from 'react-router-dom';

const MovieDetail = () =>{

    const {id} = useParams();

    return (
        <div>
            <p className='detailInfo'>{id}번 영화의 상세페이지</p>
        </div>
    )
}

export default MovieDetail;