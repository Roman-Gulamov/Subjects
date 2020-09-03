/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import Axios from "axios";

import { sortRef } from './ref';
import { sortData } from './sortData';
import { checkData, getPageId } from './checkData';


export const DataMap = ({ pageTitle }) => {
    const [parseFile, setParseFile] = useState([]);
    const [pageId, setPageId] = useState();
    const [error, setError] = useState(false);

    const axios = Axios.create();
    const header = {
        header: {'Access-Control-Allow-Origin': 'https://rcslabs.ru/',}
    }

    let location = window.location.href;


    useEffect(() => {
        axios
        .get(
            location.split(['/']).indexOf('branches') !== -1 ? 
                'https://rcslabs.ru/locations2.json' :
                'https://rcslabs.ru/locations.json', 
            header
        )
        .then((response) => {
            setPageId(getPageId(response.data, pageTitle));
            setParseFile(response.data);
            sortData();
        })
        .catch(() => {
            setError(true);
        })
    },[]);


    if (error) {
        return (
            <div className="result">
                <div className="result-wrapper" ref={sortRef}>
                    <h2 className="text-center">
                        <span role="img" aria-label="cry">&#128547;</span>
                            Ошибка при загрузки
                        <span role="img" aria-label="cry">&#128547;</span>
                    </h2>
                </div>
            </div>
        )
    } else if (!pageTitle) {
        return (
            <div className="result">
                <div className="result-wrapper" ref={sortRef}>
                    <h2 className="text-center">
                        <span role="img" aria-label="cry">&#128557;</span>
                            Не найдено 
                        <span role="img" aria-label="cry">&#128557;</span>
                    </h2>
                </div>
            </div>
        )
    } else {
        return (
            <div className="result">
                <div className="result-wrapper" ref={sortRef}>
                    {parseFile.map(data => (
                        <Fragment key={data.id}>
                            {checkData(data.parent_id, data.title, pageTitle, pageId, data.srt)}
                        </Fragment>
                    ))}
                </div>
            </div>
        )
    }
}