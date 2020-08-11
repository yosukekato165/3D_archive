import React from 'react'
import style from './index.module.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (    
        <>
            <h1 className={style.logo}><Link to="/">SUGATAKURAMASHI<br/>
                ARCHIVE</Link></h1>
        </>
    )
}

export default Logo
