import React, { useContext } from 'react'
// import { AppContext } from '../../Router'
import style from  './style.module.scss'



const title = props => {
    // const state = useContext(AppContext)
    return (
        <>
            <div className={style.title}>
                <h2 className={style.title_text}>
                    {props.title}
                </h2>
                <p className={style.title_date}>
                    {props.date}
                </p>
            </div>
        </>
    )
}

export default title