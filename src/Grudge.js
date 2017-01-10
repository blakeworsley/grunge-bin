import React, { Component } from 'react';

class Grudge extends Component {
  render() {
    const { id, name, grudge, forgiven } = this.props;
    return (
      <section className="grudge" id={id}>
        <h1>ID: {id}</h1>
        <h1>NAME: {name}</h1>
        <h1>GRUDGE: {grudge}</h1>
        <h1>FORGIVEN: {forgiven ? 'Yes': 'No'}</h1>
      </section>
    );
  }
}

export default Grudge;
