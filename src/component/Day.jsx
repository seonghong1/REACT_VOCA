import React from 'react'
import {useParams} from "react-router-dom"
import Word from './Word';
import useFetch from '../hooks/useFetch';

const Day = () => {
    const day = useParams().day;  
    const words = useFetch(`https://my-json-server.typicode.com/seonghong1/REACT_VOCA/words?day=${day}`)
    const wordList = words.filter((word) => Number(word.day) === Number(day))

    return (
        <>
            <h2>Day{day}</h2>
            <table>
                <tbody>
                    {wordList.map((word) => {
                        return (
                          <Word word={word} key={word.id}/>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Day