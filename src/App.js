import React, { Component } from 'react';

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
