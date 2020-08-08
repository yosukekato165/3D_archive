import React, { useState, useEffect, createContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import App2 from './App2'
import ThreeBox from './pages/200727'

export const AppContext = createContext()


const Router = () => {

    const [list, setList] = useState([
        {
            title: 'OneBox',
            date: '20/07/01'
        },
        {
            title: 'TwoBox',
            date: '20/07/20'
        },
        {
            title: 'ThreeBox',
            date: '20/07/24'
        }
            ]);

    // useEffect(()=> {
    //     const obj = [
    //         {
    //             title: 'OneBox',
    //             date: '20/07/01'
    //         },
    //         {
    //             title: 'TwoBox',
    //             date: '20/07/20'
    //         },
    //         {
    //             title: 'ThreeBox',
    //             date: '20/07/24'
    //         }
    //     ]
    //     setList(obj);
    // },[])

    return (
    <AppContext.Provider value={list}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact children={<App />} />
                <Route path='/App2' exact ><App2 /></Route>
                <Route path='/200727' exact><ThreeBox /></Route>
            </Switch>
        </BrowserRouter>
        {/*<App />*/}
    </AppContext.Provider>
    )
}

export default Router