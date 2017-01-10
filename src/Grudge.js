import React, { Component } from 'react';
import axios from 'axios';

class Grudge extends Component {
  render() {
    const { name, grudge, forgiven, id } = this.props;
    return (
      <section className="grudge" id={id}>
        <h1>ID: {id}</h1>
        <h1>NAME: {name}</h1>
        <h1>GRUDGE: {grudge}</h1>
        <h1>FORGIVEN: {forgiven ? 'Yes': 'No'}</h1>
        <button onClick={() => {
          axios.get(`/api/grudge-list`)
        }}></button>
      </section>
    );
  }
}

export default Grudge;
