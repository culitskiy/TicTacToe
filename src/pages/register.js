import React,{useState}  from 'react';
import './register.css';
import {Redirect, Link} from 'react-router-dom';

export const Register = () => {

    const [name, setName] = useState('');

    const changeName = (e) => {
        setName(e.target.value);
    }

    const submit = () => {
        localStorage.setItem('name', name);
        console.log('ok');
        
    }
    if(localStorage.getItem('name')){
        return (
            <Redirect to='/game'/>
            )
    }
    return(
        <div className='register'>
            <form onSubmit={submit} className='form'>
                <label for='name'>Enter your name</label>
                <input onChange={changeName} className='input' id='name' />
                <input className='button' type="submit" value='Enter'/>
            </form>
            
        </div>
    )
}