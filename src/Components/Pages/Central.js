import React from 'react';
import { DistrictsMap } from '../Districts/DistrictsMap';


export const Central = () => {
    const subjectId = 11;

    return (
        <>
            <DistrictsMap subjectId={subjectId} />
        </>
    )
}