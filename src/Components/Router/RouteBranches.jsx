import React from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import {
    FirstBranch,
    SecondBranch,
    ThirdBranch,
    FourthBranch,
    FifthBranch,
    SixthBranch,
    SeventhBranch,
    EighthBranch 
    } from '../Pages/BranchesPages';


export const RouteBranches = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Список филиалов</title>
        </Helmet>
        <div className="list-branches">
            <div className="container">
                    <h1 className="list-title title-center">Филиалы управляющей компании</h1>
                <div className="list-links">
                    <Router>
                        <div className="d-flex flex-wrap">
                            <Link to="/branches/first-branch">Первый</Link>
                            <Link to="/branches/second-branch">Второй</Link>
                            <Link to="/branches/third-branch">Третий</Link>
                            <Link to="/branches/fourth-branch">Четвёртый</Link>
                            <Link to="/branches/fifth-branch">Пятый</Link>
                            <Link to="/branches/sixth-branch">Шестой</Link>
                            <Link to="/branches/seventh-branch">Седьмой</Link>
                            <Link to="/branches/eight-branch">Восьмой</Link>
                        </div>

                        <Switch>
                            <Route path='/branches/first-branch' component={FirstBranch}/>
                            <Route path='/branches/second-branch' component={SecondBranch}/>
                            <Route path='/branches/third-branch' component={ThirdBranch}/>
                            <Route path='/branches/fourth-branch' component={FourthBranch}/>
                            <Route path='/branches/fifth-branch' component={FifthBranch}/>
                            <Route path='/branches/sixth-branch' component={SixthBranch}/>
                            <Route path='/branches/seventh-branch' component={SeventhBranch}/>
                            <Route path='/branches/eight-branch' component={EighthBranch}/>
                            <Redirect to="/branches" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
        </>
    )
}