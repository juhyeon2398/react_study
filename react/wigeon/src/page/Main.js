import React from 'react';
import List from '../component/List';
import { Link } from 'react-router-dom';

const Main = ({movieInfo}) =>{

    return (
        <div className='mainWrap'>
            {
                movieInfo.map((el,idx) => {
                    return (
                        <Link className="listItem" to={'/detail/'+idx} key={idx} >
                            <List movieData={el}/>
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default Main;