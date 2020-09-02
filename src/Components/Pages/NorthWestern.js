import React from 'react';
import { DistrictsMap } from '../Districts/DistrictsMap';


export const NorthWestern = () => {
    const subjectId = 49;

    return (
        <>
            <DistrictsMap subjectId={subjectId} />
        </>
    )
}