import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Routes } from 'react-router'

import Characters from './Characters';
import Planets from './Planets';


export default function Header() {
    return (
        <div>
            <Router> 
                <nav>
                    <ul className="d-flex row">
                        <li className="col-2"> <Link to="/"> Planets</Link> </li>
                        <li className="col-2"> <Link to="/Characters">Characters </Link></li>
                    </ul>
                    
                </nav>
                <Routes>
                    <Route path='/'>
                        <Planets/>
                    </Route>
                    <Route path='/Characters'>
                        <Characters/>
                    </Route>
                </Routes>

            </Router>
        </div>
    )
}
