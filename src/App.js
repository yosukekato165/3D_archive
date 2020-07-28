import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="./App2">App2</Link>
      <br/>
      <Link to="./200727">ThreeBox</Link>
    </>
  )
}

export default App;
