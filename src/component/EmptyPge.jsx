import React from 'react'
import {Link} from "react-router-dom"

const EmptyPge = () => {
  return (
   <>
    <h2>잘못된 접근 @!</h2>
    <Link to="/">뒤로가기 ~</Link>
   </>
  )
}

export default EmptyPge