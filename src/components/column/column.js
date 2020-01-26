import React from 'react';
import './column.css';
import { Cell } from '../cell/cell';

export const Column =( {data, click, column} ) => {

    const elements = data.map((el, index) => {
        return (
            <Cell data={el} click = {click} column = {column} cell = {index}/>
        )
    })

    return(
        <div className='column'>
            {elements}
        </div>
    )
}