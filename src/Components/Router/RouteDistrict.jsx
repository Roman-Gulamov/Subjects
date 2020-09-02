import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { Central } from '../Pages/Central';
import { NorthWestern } from '../Pages/NorthWestern';
import { Southern } from '../Pages/Southern';
import { NorthCaucasian } from '../Pages/NorthCaucasian';
import { Volga } from '../Pages/Volga';
import { Siberia } from '../Pages/Siberia';
import { FarEast } from '../Pages/FarEast';
import { Ural } from '../Pages/Ural';


export const RouteDistrict = () => {
    return (
        <Router>
            <div className="d-flex justify-content-around flex-wrap">
                <Link to="/central">Центральный</Link>
                <Link to="/north-western">Северо-Западный</Link>
                <Link to="/southern">Южный</Link>
                <Link to="/north-caucasian">Северо-Кавказский</Link>
                <Link to="/volga">Приволжский</Link>
                <Link to="/ural">Уральский</Link>
                <Link to="/siberia">Сибирский</Link>
                <Link to="/far-east">Дальневосточный</Link>
            </div>

            <Switch>
                <Route path='/central' component={Central}/>
                <Route path='/north-western' component={NorthWestern}/>
                <Route path='/southern' component={Southern}/>
                <Route path='/north-caucasian' component={NorthCaucasian}/>
                <Route path='/volga' component={Volga}/>
                <Route path='/ural' component={Ural}/>
                <Route path='/siberia' component={Siberia}/>
                <Route path='/far-east' component={FarEast}/>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}