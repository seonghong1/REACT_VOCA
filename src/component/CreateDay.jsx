import React from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const CreateDay = () => {
const days = useFetch("https://my-json-server.typicode.com/seonghong1/REACT_VOCA/days")
const navigate = useNavigate()
const addDay = (e) => {
    fetch(`https://my-json-server.typicode.com/seonghong1/REACT_VOCA/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day: days.length + 1
      }),
    }).then((res) => {
      if (res.ok) {
        alert("추가되었습니다 ~")
      }
    })
      navigate(`/`)
  }
  return (
    <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={()=>addDay()}>날짜 추가</button>
    </div>
  )
}

export default CreateDay