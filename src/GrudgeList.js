import React, { Component } from 'react';
import Grudge from './Grudge';
import axios from 'axios';

class GrudgeList extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      grudge: '',
      grudgeList: [],
      unforgivenCount: 0,
      forgivenCount: 0,
    };
  }

  componentDidMount(){
    this.getGrudgeList();
  }

  getGrudgeList(){
    axios.get('/api/grudge-list')
      .then(result => {
        this.countForgiven(result.data);
        this.setState({ grudgeList: result.data });
      })
      .catch(error => console.log(error));
  }

  createNewGrudge(){
    const { name, grudge } = this.state;
    const id = Date.now();
    const forgiven = false;
    axios.post('/grudge', {
        name: name,
        grudge: grudge,
        forgiven: forgiven,
        id: id
      })
      .catch(error => console.log(error));
    this.getGrudgeList();
  }

  addGrudgesToPage() {
    const { grudgeList } = this.state;
    return grudgeList.map((person, i) => {
      return (
        <li key={i}>
          <Grudge name={person.name} grudge={person.grudge} forgiven={person.forgiven}
            id={person.id} />
        </li>
      )
    })
  }

  countForgiven(result){
    let unforgivenCount = 0;
    let forgivenCount = 0;
    for (var i = 0; i < result.length; i++) {
      if(!result[i].forgiven){ unforgivenCount++; }
      if(result[i].forgiven){ forgivenCount++; }
      if(i === (result.length - 1)){
        return this.setState({unforgivenCount: unforgivenCount, forgivenCount: forgivenCount});
      }
    }
  }


  render() {
    const { name, grudge, grudgeList, unforgivenCount, forgivenCount } = this.state;
    return (
      <section className="grudge-list">
        <h2>Grudge List</h2>
        <section>
          <input
            placeholder='Enter Name'
            onChange={(e) => this.setState({ name: e.target.value})}
            value={name}
            >
          </input>
          <input
            placeholder='Enter Grudge'
            onChange={(e) => this.setState({ grudge: e.target.value})}
            value={grudge}
            >
          </input>
          <button onClick={() => this.createNewGrudge()}>
            Submit
          </button>
        </section>
        <section>Total People on my List: {grudgeList.length}</section>
        <section>Unforgivables: {unforgivenCount}</section>
        <section>Forgiven: {forgivenCount}</section>
        <ul>{this.addGrudgesToPage()}</ul>
      </section>
    );
  }
}

export default GrudgeList;
