import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
            <h1>
                <Link to="/">
                    단어들입니다 ~
                </Link>
            </h1>
            <div className="menu">
                <Link to="/create_word">
                    단어추가
                </Link>
                <Link to="/create_day">
                    DAY추가
                </Link>
            </div>
        </div>
    )
}

export default Header