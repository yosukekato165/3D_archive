import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from './Router'
// import list from './App'

const Item = () => {
    const list = useContext(AppContext)

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
            {item(list)}
        </>
    )

};

export default Item;