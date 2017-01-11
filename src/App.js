import React, { Component } from 'react';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';
import GrudgeList from './GrudgeList';

class App extends Component {
  render() {
    return (
      <section className="App">
        {this.props.children}
      </section>
    );
  }
}

export default App;
