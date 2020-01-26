import React from 'react';
import './statistics.css';

export const Statistics = ( {data}) => {
    return(
        <div className='statistics'>
            <span>Vctories: {data[0]}</span>
            <span>Losses: {data[1]}</span>
            <span>Draw: {data[2]}</span>
        </div>
    )
}