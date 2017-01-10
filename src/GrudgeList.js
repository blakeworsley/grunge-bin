import React, { Component } from 'react';
import Grudge from './Grudge';

class GrudgeList extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      grudge: '',
      grudgeList: []
    };
  }

  createNewGrudge(){
    const { name, grudge, grudgeList } = this.state;
    const id = Date.now();
    const forgiven = false;
    this.setState({ grudgeList: grudgeList.concat([{name, grudge, forgiven, id}]) });
  }

  addGrudgesToPage() {
    const { grudgeList } = this.state;
    return grudgeList.map((person, i) => {
      return (
        <section key={i}>
          <Grudge name={person.name} grudge={person.grudge} forgiven={person.forgiven}
            id={person.id} />
        </section>
      )
    })
  }

  render() {
    return (
      <section className="grudge-list">
        <h2>Grudge List</h2>
        <section>
          <input
            placeholder='Enter Name'
            onKeyUp={(e) => this.setState({ name: e.target.value})}
            >
          </input>
          <input
            placeholder='Enter Grudge'
            onKeyUp={(e) => this.setState({ grudge: e.target.value})}
            >
          </input>
          <button onClick={() => this.createNewGrudge()}>
            Submit
          </button>
        </section>
        { this.addGrudgesToPage() }
      </section>
    );
  }
}

export default GrudgeList;
