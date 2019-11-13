import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todolist from './views/Todolist'

const App = ()=>{
    return(
    <Router>
      <Switch> 
      <Route exact path="/" component= {Todolist}/>
          </Switch>
     
</Router>
)
}


export default App;
