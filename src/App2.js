import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom'


const App2 = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <br/>
            App2{console.log('app2')}
        </>
    )
}

export default App2