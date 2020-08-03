import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import App2 from './App2'
import ThreeBox from './pages/200727'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact children={<App />} />
                <Route path='/App2' exact ><App2 /></Route>
                <Route path='/200727' exact><ThreeBox /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router