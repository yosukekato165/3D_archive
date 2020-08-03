import React, { useState, useEffect } from 'react';
import './App.scss';
import { Link } from 'react-router-dom'

function App() {
    const [list, setList] = useState([{title: 'OneBox',
        date: '20/07/01'}]);

    useEffect(()=> {
        const obj = [
            {
                title: 'OneBox',
                date: '20/07/01'
            },
            {
                title: "TwoBox",
                date: '20/07/20'
            },
            {
                title: "ThreeBox",
                date: '20/07/24'
            }
        ]
        setList(obj);
    },[])

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
    console.log(list);
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="./App2">App2</Link>
      <br/>
      <Link to="./200727">ThreeBox</Link>
      <main>
          <ul className="archive_list">
              {item(list)}
          </ul>
      </main>
    </>
  )
}

export default App;
