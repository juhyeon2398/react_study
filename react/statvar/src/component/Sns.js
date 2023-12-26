import React, { useState } from "react";

const Sns = ()=>{
    const data = [
        {
            name:"위건",
            comment: "리엑트 재밋어요~",
        },
        {
            name:"유재석",
            comment: "무한~ 도전~",
        },
        {
            name:"강호동",
            comment: "천하장사~",
        },
        {
            name:"이영자",
            comment: "코멘트 1",
        },
        {
            name:"익명",
            comment: "내가 누굴까",
        },
    ]

    const [txtInput,setTxtInput] = useState("");
    const [snsData,setSnsData] = useState([...data]);

    const commentHandle = () =>{
        setSnsData([
            ...snsData,
            {
                name:"1111",
                comment:txtInput
            }
        ])
    }

    return (
        <div className="snsList">
            <input type="text" name="" id="" value={txtInput} onChange={(e) => setTxtInput(e.target.value)}/>
            <button className="addBtn" onClick={commentHandle}>추가</button>
            {
                snsData.map((el) => {
                    return (
                        <div className="comment">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
                            </div>
                            <div className="textBox">
                                <strong>{el.name}</strong>
                                <p>{el.comment}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sns;