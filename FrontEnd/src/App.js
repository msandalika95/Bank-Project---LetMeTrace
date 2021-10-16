import React from 'react';
import './App.css';
import './cssFiles/Visitor.css';

import {Route} from 'react-router-dom';

import Visitors from './pages/Visitors';
import AllVisitors from './components/AllVisitors';

export default function App() {
  return(
    <React.Fragment>
      <Route exact path = "/" component = {Visitors}/>
      <Route path = "/visitors" component = {AllVisitors}/>
    </React.Fragment>
  )  
}

