import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home.jsx'

const App = ()=>{
    return(
    <Router>
      <Switch> 
      <Route exact path="/" component= {Home}/>
          </Switch>
     
</Router>
)
}


export default App;
