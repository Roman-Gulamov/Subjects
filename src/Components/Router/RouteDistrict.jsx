import React from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { 
    Central,
    NorthWestern,
    Southern,
    NorthCaucasian,
    Volga,
    Siberia,
    FarEast,
    Ural
} from '../Pages/DistrictsPages';


export const RouteDistrict = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Список субъектов</title>
        </Helmet>
        <div className="list-districts">
            <div className="container">
                    <h1 className="list-title title-center">Федеральные округа Российской Федерации</h1>
                <div className="list-links">
                    <Router>
                        <div className="d-flex justify-content-around flex-wrap">
                            <Link to="/districts/central">Центральный</Link>
                            <Link to="/districts/north-western">Северо-Западный</Link>
                            <Link to="/districts/southern">Южный</Link>
                            <Link to="/districts/north-caucasian">Северо-Кавказский</Link>
                            <Link to="/districts/volga">Приволжский</Link>
                            <Link to="/districts/ural">Уральский</Link>
                            <Link to="/districts/siberia">Сибирский</Link>
                            <Link to="/districts/far-east">Дальневосточный</Link>
                        </div>

                        <Switch>
                            <Route path='/districts/central' component={Central}/>
                            <Route path='/districts/north-western' component={NorthWestern}/>
                            <Route path='/districts/southern' component={Southern}/>
                            <Route path='/districts/north-caucasian' component={NorthCaucasian}/>
                            <Route path='/districts/volga' component={Volga}/>
                            <Route path='/districts/ural' component={Ural}/>
                            <Route path='/districts/siberia' component={Siberia}/>
                            <Route path='/districts/far-east' component={FarEast}/>
                            <Redirect to="/districts" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
        </>
    )
}