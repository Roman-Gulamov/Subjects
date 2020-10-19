/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import Axios from "axios";

import { checkData, getPageId } from './checkData';


export const DataMap = ({ pageTitle }) => {
    const [parseFile, setParseFile] = useState([]);
    const [sortParseFile, setSortParseFile] = useState([]);
    const [pageId, setPageId] = useState();
    const [error, setError] = useState(false);

    const axios = Axios.create();
    const header = {
        header: {'Access-Control-Allow-Origin': 'https://rcslabs.ru/',}
    }

    let location = window.location.href;


    useEffect(() => {
        setSortParseFile(
            parseFile
                .filter(item => item.parent_id === pageId || item.parent_id === null)
                .map(({ id, parent_id, title, srt }) => ({
                    id,
                    parent_id,
                    title,
                    srt: parent_id === null ? -1 : srt
                }))
                .sort((prev, next) => prev.srt - next.srt)
        )
    },[parseFile]);

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
        })
        .catch(() => {
            setError(true);
        })
    },[]);


    if (error) {
        return (
            <div className="result">
                <div className="result-wrapper">
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
                <div className="result-wrapper">
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
                <div className="result-wrapper">
                    {sortParseFile.map(data => (
                        <Fragment key={data.id}>
                            {checkData(data.parent_id, data.title, pageTitle, data.srt)}
                        </Fragment>
                    ))}
                </div>
            </div>
        )
    }
}