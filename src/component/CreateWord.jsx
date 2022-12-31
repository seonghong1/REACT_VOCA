import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const CreateWord = () => {
  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)
  const navigate = useNavigate()
  const days = useFetch("https://my-json-server.typicode.com/seonghong1/REACT_VOCA/days")
  const onSubmit = (e) => {
    e.preventDefault()
    fetch(`https://my-json-server.typicode.com/seonghong1/REACT_VOCA/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false
      }),
    }).then((res) => {
      if (res.ok) {
        alert("추가되었습니다 ~")
      }
    })
      navigate(`/day/${dayRef.current.value}`)
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="input_area">
        <label htmlFor="">eng</label>
        <input type="text" placeholder='computer' ref={engRef} />
      </div>
      <div className="input_area">
        <label htmlFor="">kor</label>
        <input type="text" placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className="input_area">
        <label htmlFor="">day</label>
        <select name="" id="" ref={dayRef}>
          {days.map((day) => {
            return <option key={day.id} value={day.day}>{day.day}</option>
          })}
        </select>
      </div>
      <button>추가하기</button>
    </form>
  )
}

export default CreateWord