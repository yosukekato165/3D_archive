import React, { useState, useEffect, useContext } from 'react'
import style from './App.scss'
import { Link } from 'react-router-dom'
import { AppContext} from './Router'
import Item from './Item'


const App = () => {

    // const list = useContext(AppContext);
    //
    // const item = e => {
    //
    //     const res = e.map((elm,i) =>
    //         <li className="archive_item">
    //             <Link to="./200727">
    //                 <img src="" alt=""/>
    //                 <h2>{e[i].title}</h2>
    //                 <p>{e[i].date}</p>
    //             </Link>
    //         </li>
    //     )
    //     return res
    // }

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="./App2">App2</Link>
      <br/>
      <Link to="./200727">ThreeBox</Link>
      <main>
          <ul className="archive_list">
              <Item />
          </ul>
      </main>
    </>
  )
}

export default App;
