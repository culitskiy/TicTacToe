import React from 'react';
import './cell.css';

export const Cell = ({data, click, column, cell}) => {

    const onClick = () => {
        if(data === null){
            click(column, cell)
        }
        
    }
    const cellData = () => {
        
        if(data === 0){
            return  <circle class="checkmark__circle" cx="26" cy="26" r="15" fill="none" /> 
        }else if(data === 1){
            return <path class="checkmark__check" fill="none" d="M16 16 36 36 M36 16 16 36" /> 
        }
    }

    return(
        <div onClick={onClick} className='cell'>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                {cellData()}
                {/* <circle class="checkmark__circle" cx="26" cy="26" r="15" fill="none" /> */}
                {/* <path class="checkmark__check" fill="none" d="M16 16 36 36 M36 16 16 36" /> */}
            </svg>
        </div>
    )
}