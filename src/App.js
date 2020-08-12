import React from 'react'
import './App.scss'
import { Link } from 'react-router-dom'
import Item from './components/item/Item'
import Logo from './components/Logo'



const App = () => {

  return (
    <>
      {/*<Link to="/">Home</Link>*/}
      {/*<Link to="./App2">App2</Link>*/}
      {/*<br/>*/}
      {/*<Link to="./200727">ThreeBox</Link>*/}
      <Logo />
      <main className="main">
          <ul className="archive_list">
              <Item />
          </ul>
      </main>
    </>
  )
}

export default App;
