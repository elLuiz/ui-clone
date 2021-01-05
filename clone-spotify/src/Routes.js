import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landscape from './Pages/LandScape';
import Login from './Pages/Login';

export default function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Landscape} />
            <Route path="/login" component={Login} />
        </Router>
    )
}
