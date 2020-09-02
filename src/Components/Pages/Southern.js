import React from 'react';
import { DistrictsMap } from '../Districts/DistrictsMap';


export const Southern = () => {
    const subjectId = 3;

    return (
        <>
            <DistrictsMap subjectId={subjectId} />
        </>
    )
}