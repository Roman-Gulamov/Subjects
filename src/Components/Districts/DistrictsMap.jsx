/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import Axios from "axios";

import { sortRef } from './ref';
import { sortSubjects } from './sortSubjects';


export const DistrictsMap = ({ subjectId }) => {
    const [parseFile, setParseFile] = useState([]);
    const axios = Axios.create();
    const header = {
        header: {'Access-Control-Allow-Origin': 'https://rcslabs.ru/',}
    }

    useEffect(() => {
        axios
        .get("https://rcslabs.ru/locations.json", header)
        .then((response) => {
            setParseFile(response.data)
        })
    },[]);

    useEffect(() => {
        sortSubjects();
    })

    return (
        <div className="districts">
            <div className="districts-wrapper" ref={sortRef}>
                {parseFile.map(district => (
                    <Fragment key={district.id}>
                        {district.parent_id === null ?
                            <h2 className="text-center mb-5" data-srt='-2'>{district.title}</h2> : null}
                        {district.id === subjectId ?
                            <h3 className="text-center mb-5" data-srt='-1'>{district.title}</h3> : null}
                        {district.parent_id === subjectId ?
                            <div 
                                data-srt={district.srt} 
                                className="districts-item"
                            >
                                <a 
                                    className="districts-subject"
                                    href={`https://yandex.ru/search/?lr=2&text=${district.title}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                >{`№${district.srt} ${district.title}`}
                                </a>
                            </div>
                        : null}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}