import React, { createContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import App2 from './App2'
import ThreeBox from './pages/200727'
import image from './pages/200727/thumbnail.png'

export const AppContext = createContext()


const Router = () => {

    const list = [
        {
            title: 'one box',
            date: '20/07/01',
            path: `200727`,
            image: image
        },
        {
            title: 'Two Box',
            date: '20/07/20',
            path: '200727',
            image: image
        },
        {
            title: 'Three Box',
            date: '20/07/24',
            path: '200727',
            image: image
        },
        {
            title: 'Four Box',
            date: '20/07/24',
            path: '200727',
            image: image
        }
        ];


    return (
    <AppContext.Provider value={list}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact children={<App />} />
                <Route path='/App2' exact ><App2 /></Route>
                <Route path='/200727' exact><ThreeBox /></Route>
            </Switch>
        </BrowserRouter>
    </AppContext.Provider>
    )
}

export default Router