import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../../Router'
import style from './style.module.scss';


const Item = () => {
    const list = useContext(AppContext)
    const item = e => {
        const res = e.map((elm,i)=>

            <li className={style.archive_item}>
                <Link className={style.archive_inner} to={`./${e[i].path}`}>
                    <div className={style.archive_image}>
                        <img className={style.archive_image_in} src={e[i].image} alt=""/>
                    </div>
                    <div className={style.archive_desc}>
                        <h2>{e[i].title}</h2>
                        <p>{e[i].date}</p>
                    </div>
                </Link>
            </li>
        )
        return res
    }
    return (
        <>
            {item(list)}
        </>
    )

};

export default Item;