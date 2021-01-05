import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landscape from './Pages/LandScape';

export default function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Landscape} />
        </Router>
    )
}
