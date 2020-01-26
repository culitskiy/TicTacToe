import React, {useState} from 'react';
import './game.css';
import { Table } from '../components/table/table';
import { Statistics } from '../components/statistics/statistics';
import { isString, isArray } from 'util';

export const Game = () => {

    const [data, setData] = useState([
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]);
    const [move, setMove] = useState(1)
    const [statistics, setStatistics] = useState([0, 0, 0]);
    const [moveCounter, setMoveCounter] = useState(0)

    const name = localStorage.getItem('name');

    const gameBot = (res) => {
        const checkHor2FuelCell = () => {
            
            for(let i = 0; i < data[0].length; i++){
                let countPlayer = 0;
                let countBot = 0;
                let xy = [];
                data.map((el,index) => {
                    if(el[i] === 1 ){
                        countPlayer = countPlayer+1;
                    }else if(el[i] === 0){
                        countBot = countBot + 1;
                    }else if(el[i] === null){
                        xy = [index, i];
                    }
                })
                let checkFuelHor = data.some((el,index)=> el[i] === null);
                if(countPlayer === 2 && checkFuelHor){
                    console.log(i);
                    return xy;
                    
                }else if(countPlayer === 3){
                    return 'Player';
                }else if(countBot === 3){
                    return 'Bot';
                }
                // else if(countBot !==2 && countBot !==3
                //     && countPlayer !==2 && countPlayer !==3){
                //         return xy;
                //     }
            }
        }
        const checkVer2FuelCell = () => {
            
            for(let i = 0; i < data[0].length; i++){
                let countPlayer = 0;
                let countBot = 0;
                let xy = [];
                data[i].map((el,index) => {
                    if(el === 1){
                        countPlayer = countPlayer+1;
                    }else if(el === 0){
                        countBot = countBot + 1;
                    }else if( el === null){
                        xy = [i, index]
                    }
                })
                let checkFuelVert = data[i].some((el, index) => el === null )
                if(countBot === 2 && checkFuelVert){
                    console.log(xy);
                    return xy;
                    
                }else if(countPlayer === 2 && checkFuelVert && countBot !== 2){
                    console.log(xy);
                    return xy;
                }else if(countPlayer === 3){
                    return 'Player';
                }else if(countBot === 3){
                    return 'Bot';
                }
                // else if(countBot !==2 && countBot !==3
                //     && countPlayer !==2 && countPlayer !==3){
                //         return xy;
                //     }
            }
        }
        const checkDiag2FuelCell = () => {
            console.log('diag');
                let countPlayer = 0;
                let countBot = 0;
                let xy = [];
                data.map((el,index) => {
                    if(el[data.length - 1 - index] === 1){
                        countPlayer = countPlayer + 1;
                    }else if(el[data.length - 1 - index] === 0){
                        countBot = countBot + 1;
                    }else if(el[data.length - 1 - index] === null){
                       xy = [data.length - 1 - index,index]; 
                    }
                })
                let checkFuelDiag = data.some((el,index) => el[data.length - 1 - index] === null)
                if(countPlayer === 2 && checkFuelDiag){
                    console.log(xy)
                    return xy;
                    
                }else if(countBot === 2 && checkFuelDiag){
                    console.log(xy)
                    return xy;
                }else if(countPlayer === 3){
                    return 'Player';
                }else if(countBot === 3){
                    return 'Bot';
                }
                // else if(countBot !==2 && countBot !==3
                //     && countPlayer !==2 && countPlayer !==3){
                //         return xy;
                //     }
            
        }
        const moveBot = () => {
            let xy = [];
            for(let i = 0; i < data.length; i++){
                
                data[i].map((el, index) => {
                    if (el === null){
                        xy = [i,index];
                    }
                })
            }
            return xy;
        }
       
        switch(res){
            case 1:
                if(data[1][1] === null){
                    let newData = [...data];
                    newData[1][1] = 0;
                    setData(newData);
                    setMove(1);
                    setMoveCounter(res+1)
                }else if(data[1][1] !== null){
                    let newData = [...data];
                    newData[0][0] = 0;
                    setData(newData);
                    setMove(1);
                    setMoveCounter(res+1)
                }
                break;
            case 3:
                console.log('step3');
                let checkHor = checkHor2FuelCell();
                let checkVer = checkVer2FuelCell();
                let checkDiag = checkDiag2FuelCell();
                console.log(checkHor);
                console.log(checkVer);
                console.log(checkDiag);
                if(isArray(checkHor) ){
                    console.log('Horizontal')
                    console.log(checkHor)
                    let newData = [...data];
                    newData[checkHor[0]][checkHor[1]] = 0;
                    setData(newData);
                
                }
                if(isArray(checkVer)){
                    console.log('Vertical',checkVer)
                    
                    let newData = [...data];
                    newData[checkVer[0]][checkVer[1]] = 0;
                
                    console.log(newData);
                    setData(newData);
                }
                if(isArray(checkDiag) ){
                    console.log('Diagonal',checkDiag)
                    
                    let newData = [...data];
                    newData[checkDiag[1]][checkDiag[0]] = 0;
                    console.log(newData);
                    setData(newData);
                }
                if(checkDiag === undefined && checkHor === undefined
                    && checkVer === undefined){
                        const xy = moveBot();
                        console.log(xy)
                        let newData = [...data];
                        newData[xy[0]][xy[1]] = 0;
                        console.log(newData);
                        setData(newData);
                    }
                setMove(1);
                setMoveCounter(res+1)
                break;
            case 5:
                    console.log('step5');
                let checkHor5 = checkHor2FuelCell();
                let checkVer5 = checkVer2FuelCell();
                let checkDiag5 = checkDiag2FuelCell();
                console.log(checkHor5);
                console.log(checkVer5);
                console.log(checkDiag5);
                if(isArray(checkHor5) ){
                    console.log('Horizontal')
                    console.log(checkHor5)
                    let newData = [...data];
                    newData[checkHor5[0]][checkHor5[1]] = 0;

                    setData(newData);
                
                }else
                if(isArray(checkVer5)){
                    console.log('Vertical',checkVer5)
                    
                    let newData = [...data];
                    newData[checkVer5[0]][checkVer5[1]] = 0;
                  
                    console.log(newData);
                    setData(newData);
                }else
                if(isArray( checkDiag5)){
                    console.log('Diagonal',checkDiag5)
                    
                    let newData = [...data];
                    newData[checkDiag5[1]][checkDiag5[0]] = 0;
                    console.log(newData);
                    setData(newData);
                }else
                if(checkDiag5 === undefined && checkHor5 === undefined
                    && checkVer5 === undefined){
                        const xy = moveBot();
                        console.log(xy)
                        let newData = [...data];
                        newData[xy[0]][xy[1]] = 0;
                        console.log(newData);
                        setData(newData);
                    }
                setMove(1);
                setMoveCounter(res+1)
                break;
            case 7:
                    console.log('step7');
                let checkHor7 = checkHor2FuelCell();
                let checkVer7 = checkVer2FuelCell();
                let checkDiag7 = checkDiag2FuelCell();
                console.log(checkHor7);
                console.log(checkVer7);
                console.log(checkDiag7);
                if(isArray(checkHor7)){
                    console.log('Horizontal')
                    console.log(checkHor7)
                    let newData = [...data];
                    newData[checkHor7[0]][checkHor7[1]] = 0;
                    setData(newData);
                
                }else
                if(isArray(checkVer7)){
                    console.log('Vertical',checkVer7)
                    
                    let newData = [...data];
                    newData[checkVer7[0]][checkVer7[1]] = 0;
                    console.log(newData);
                    setData(newData);
                }else
                if(isArray(checkDiag7)){
                    console.log('Diagonal',checkDiag7)
                    
                    let newData = [...data];
                    newData[checkDiag7[1]][checkDiag7[0]] = 0;
                    console.log(newData);
                    setData(newData);
                }else
                if(checkDiag7 === undefined && checkHor7 === undefined
                    && checkVer7 === undefined){
                        const xy = moveBot();
                        console.log(xy)
                        let newData = [...data];
                        newData[xy[0]][xy[1]] = 0;
                        console.log(newData);
                        setData(newData);
                    }
                setMove(1);
                setMoveCounter(res+1)
                break;
            case 9:
                    console.log('step9');
                let checkHor9 = checkHor2FuelCell();
                let checkVer9 = checkVer2FuelCell();
                let checkDiag9 = checkDiag2FuelCell();
                console.log(checkHor9);
                console.log(checkVer9);
                console.log(checkDiag9);
                if(isArray (checkHor9)){
                    console.log('Horizontal')
                    console.log(checkHor9)
                    let newData = [...data];
                    newData[checkHor9[0]][checkHor9[1]] = 0;
                    setData(newData);
                
                }
                if(isArray(checkVer9) ){
                    console.log('Vertical',checkVer9)
                    
                    let newData = [...data];
                    newData[checkVer9[0]][checkVer9[1]] = 0;
                    console.log(newData);
                    setData(newData);
                }
                if(isArray(checkDiag9)){
                    console.log('Diagonal',checkDiag9)
                    
                    let newData = [...data];
                    newData[checkDiag9[1]][checkDiag9[0]] = 0;
                    console.log(newData);
                    setData(newData);
                }
                if(checkDiag9 === undefined && checkHor9 === undefined
                    && checkVer9 === undefined){
                        let newStatistics = [...statistics];
                        newStatistics[2] = newStatistics[2] + 1;
                        setStatistics(newStatistics);
                        alert('Ничья!');
                    }
                setMove(1);
                setMoveCounter(res+1)
                break;
                default:
           
                

        }
        const checkWin = () => {
        
            if( checkHor2FuelCell() === 'Bot'){
                 let newStatistics = [...statistics];
                 newStatistics[1] = newStatistics[1] + 1;
                setStatistics(newStatistics);
                alert('Bot Win')
                reset();
            }else if(checkHor2FuelCell() === 'Player'){
                let newStatistics = [...statistics];
                 newStatistics[0] = newStatistics[0] + 1;
                setStatistics(newStatistics);
                alert('Player Win')
                reset();
            }
            if( checkVer2FuelCell() === 'Bot'){
                let newStatistics = [...statistics];
                newStatistics[1] = newStatistics[1] + 1;
               setStatistics(newStatistics);
               alert('Bot Win')
               reset();
           }else if(checkVer2FuelCell() === 'Player'){
               let newStatistics = [...statistics];
                newStatistics[0] = newStatistics[0] + 1;
               setStatistics(newStatistics);
               alert('Player Win')
               reset();
           }
            if( checkDiag2FuelCell() === 'Bot'){
                let newStatistics = [...statistics];
                newStatistics[1] = newStatistics[1] + 1;
            setStatistics(newStatistics);
            alert('Bot Win')
            reset();
                }else if(checkDiag2FuelCell() === 'Player'){
            let newStatistics = [...statistics];
                newStatistics[0] = newStatistics[0] + 1;
            setStatistics(newStatistics);
            
            alert('Player Win')
            reset();
        }
        }
        checkWin();
        
    }

    
    

    const click = (column, cell) => {
       const promise = new Promise((res, rej) => {
        let step;
        if(move === 1){
            
            const newData = [...data];
            newData[column][cell] = 1;
            setData(newData);
            setMove(0);
            step = moveCounter+1
            setMoveCounter(step);
        }
        res(step)
       })
        promise.then((res) => setTimeout(() => gameBot(res), 1000) );
        
    }
    const reset = () => {
        setData([
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]);
        setMove(1);
        setMoveCounter(0)
    }
    return(
        <div className='game'>
            <div className='name'>
                <span >{name}</span>
            </div>
            <button onClick={reset}>Reset</button>
            <Statistics data={statistics}/>
            <Table data={data} click={click} />
        </div>
    )
}