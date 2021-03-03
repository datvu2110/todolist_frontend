import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Landing} />
    <Route path="/demo" component={App} />
  </Router>
    
  ,
  document.getElementById('root')
);
