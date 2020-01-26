import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { Register } from './pages/register';
import { Game } from './pages/game';

function App() {
  return (
    <HashRouter>
    <Switch>
        <Route path='/' exact component={Register}/>
        <Route path='/game' component={Game}/>
    </Switch>
</HashRouter>
  );
}

export default App;
