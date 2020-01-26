import React from 'react'
import './table.css'
import { Column } from '../column/column';

export const Table = ({data, click}) => {
    const elements = data.map((el, index) => {
        return (
            <Column data={el} click = {click} column = {index}/>
        );
    });
    return(
        <div className='table'>
            {elements}
        </div>
    )
}