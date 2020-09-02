import React from 'react';
import { RouteDistrict } from './Router/RouteDistrict';
import './app.scss';


export const App = () => {
    return (
        <div className="list">
            <div className="container">
                    <h1 className="list-title title-center">Федеральные округа Российской Федерации</h1>
                <div className="list-districts">
                    <RouteDistrict />
                </div>
            </div>
        </div>
    );
}
