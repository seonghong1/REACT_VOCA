import React from 'react'
import { Link } from "react-router-dom"
import useFetch from '../hooks/useFetch'

const DayList = () => {
    const days = useFetch("https://my-json-server.typicode.com/seonghong1/REACT_VOCA/days")

    return (
        <ul>
            {days.map((day) => {
                return <Link to={`/day/${day.day}`}>
                    <li key={day.id}>
                        Day{day.day}
                    </li>
                </Link>
            })}
        </ul>
    )
}

export default DayList