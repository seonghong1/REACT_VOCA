import React from 'react'
import { useState } from 'react'

const Word = ({ word:w }) => {
    const [word, setWord] = useState(w)
    const [isShow, setIsShow] = useState(false)
    const [isDone, setIsDone] = useState(word.isDone)
    const toggleDone = () => {
        fetch(`https://my-json-server.typicode.com/seonghong1/REACT_VOCA/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...word, isDone: !isDone
            }),
        }).then((res) => {
            if (res.ok) {
                setIsDone(!isDone)
            }
        })
    }
    const del = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            fetch(`https://my-json-server.typicode.com/seonghong1/REACT_VOCA/words/${word.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((res)=>{
                if(res.ok){
                    setWord({id: 0})
                }
            })
        }
    }
    if(word.id === 0){
        return null
    }
    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={() => setIsShow(!isShow)}>{isShow ? "숨겨!" : "뜻보기"}</button>
                <button className='btn_del' onClick={del}>삭제</button>
            </td>
        </tr>
    )
}

export default Word