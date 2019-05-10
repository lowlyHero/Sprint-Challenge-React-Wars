import React, { Component } from 'react';
import Character from './components/Character';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [
        {
          name: 'Darth Vader',
          affiliation: 'Galactic Empire',
          species: 'Human'
        },
        {
          name: 'Luke Skywalker',
          affiliation: 'Rebel Alliance',
          species: 'Human'
        },
        {
          name: 'Yoda',
          affiliation: 'Jedi Order',
          species: 'unknown'
        }
      ]
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <h1 className='Header'>Star Wars Characters</h1>
        <div className='char-list'>
          {this.state.starwarsChars.map(character => (
            <Character character={character} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
