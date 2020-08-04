import React, { useState, useEffect } from 'react'
import './App.scss'
import { Link } from 'react-router-dom'
import AppContext from './contexts/AppContext'
import Item from './Item'

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


  return (
    <AppContext.provider value={list}>
      <Link to="/">Home</Link>
      <Link to="./App2">App2</Link>
      <br/>
      <Link to="./200727">ThreeBox</Link>
      <main>
          <ul className="archive_list">
              <Item />
          </ul>
      </main>
    </AppContext.provider>
  )
}

export default App;
