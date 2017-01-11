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

  forgivePerson(selectedPerson){
    const { grudgeList } = this.state;
    const newList = grudgeList.map((person) => {
      if(person.id === selectedPerson) {
        return {  name: person.name,
                  grudge: person.grudge,
                  forgiven: true,
                  id: person.id,
                };
      }
      else { return person; }
    });
    this.countForgiven(newList);
    this.setState({ grudgeList: newList });
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
      // let url = i;
      // if(person.name){
      //   url = person.name.replace(' ', '').toLowerCase();
      // }
      return (
        <li key={i} className={person.forgiven ? 'forgiven' : ''}>
          <Grudge person={person} forgivePerson={(selectedPerson) => this.forgivePerson(selectedPerson)} />
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
        <header>
          <section>
            <h1>Grudge List</h1>
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
              <button onClick={() => this.createNewGrudge()}
                disabled={!(name && grudge)}>
                Submit
              </button>
            </section>
          </section>
          <section className="counts">
            <h2>Total People on my List: {grudgeList.length}</h2>
            <h2>Unforgivables: {unforgivenCount}</h2>
            <h2>Forgiven: {forgivenCount}</h2>
          </section>
        </header>
        <ul>{grudgeList.length ? this.addGrudgesToPage() : null}</ul>
      </section>
    );
  }
}

export default GrudgeList;
