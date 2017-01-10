import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import GrudgeList from './GrudgeList';
// import Grudge from './Grudge';

// <Router history={hashHistory}>
//   <Route path='/' component={App}>
//     <IndexRoute component={App} />
//     <Route path='/grudge-list' component={GrudgeList} />
//     <Route path='/grudge-list/:id' component={Grudge} />
//   </Route>
// </Router>,
// document.getElementById('root')
