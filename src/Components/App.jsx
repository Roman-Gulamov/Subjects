import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { RouteBranches } from './Router/RouteBranches';
import { RouteDistrict } from './Router/RouteDistrict';
import './app.scss';


export const App = () => {
    return (
        <div className="choise container list-links">
            <Router>
                <div className="choise-text d-flex justify-content-around flex-wrap pt-4 text-center">
                    <Link to="/districts" className="text-danger">Округа Российской Федерации</Link>
                    <Link to="/branches" className="text-danger">Филиалы</Link>
                </div>

                <Switch>
                    <Route path='/districts' component={RouteDistrict}/>
                    <Route path='/branches' component={RouteBranches}/>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}
