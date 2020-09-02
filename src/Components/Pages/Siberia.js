import React from 'react';
import { DistrictsMap } from '../Districts/DistrictsMap';


export const Siberia = () => {
    const subjectId = 60;
    
    return (
        <>
            <DistrictsMap subjectId={subjectId} />
        </>
    )
}