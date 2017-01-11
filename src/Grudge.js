import React, { Component } from 'react';
import axios from 'axios';

class Grudge extends Component {
  render() {
    const { name, grudge, forgiven, id } = this.props.person;
    return (
      <section className="grudge" id={id}>
        <h4>ID: {id}</h4>
        <h2>NAME: {name}</h2>
        <h3>GRUDGE: {grudge}</h3>
        <h3>FORGIVEN: {forgiven ? 'Yes': 'No'}</h3>
        <button onClick={() => console.log('forgive me?')}>Forgive</button>
      </section>
    );
  }
}

export default Grudge;
