import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todolist from '../views/Todolist';
const Routes = () => (
    <Router>
    <Switch> 
    <Route exact path="/" component= {Todolist}/>
        </Switch>
   </Router>
)

export default Routes;