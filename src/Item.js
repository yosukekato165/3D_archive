import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppContext from './contexts/AppContext'

const Item = () => {
    const { state } = useContext(AppContext)

    const item = e => {
        const res = e.map((elm,i)=>
            <li className="archive_item">
                <Link to="./200727">
                    <img src="" alt=""/>
                    <h2>{e[i].title}</h2>
                    <p>{e[i].date}</p>
                </Link>
            </li>
        )
        return res
    }
    return (
        <>
            {item(state)}
        </>
    )

};

export default Item;