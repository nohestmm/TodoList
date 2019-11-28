import React from 'react';
import './App.css';
import Routes from './components/Routes';
import { Provider } from 'react-redux'
import store from './redux/store'
const App = ()=>(
  <Provider store= {store}>
 <Routes/>
 </Provider>
)
export default App;
