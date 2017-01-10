import React, { Component } from 'react';
import Grudge from './Grudge';

class GrudgeList extends Component {
  render() {
    return (
      <section className="grudge-list">
        <h1>GrudgeList</h1>
        <Grudge
          id={Date.now()}
          name={'Juan Pablo'}
          grudge={'Bad Man'}
          forgiven={true}
        />
      </section>
    );
  }
}

export default GrudgeList;
