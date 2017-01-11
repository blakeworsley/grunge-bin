
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import GrudgeList from './GrudgeList';
import Grudge from './Grudge';

 ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={GrudgeList}/>
      <Route path='/:name' component={GrudgeList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
