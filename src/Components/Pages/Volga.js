import React from 'react';
import { DistrictsMap } from '../Districts/DistrictsMap';


export const Volga = () => {
    const subjectId = 55;

    return (
        <>
            <DistrictsMap subjectId={subjectId} />
        </>
    )
}