import React, { Component } from 'react';
import GrudgeList from './GrudgeList';

class App extends Component {
  render() {
    return (
      <section className="App">
        <h1>Grudge Bin</h1>
        <GrudgeList />
      </section>
    );
  }
}

export default App;
