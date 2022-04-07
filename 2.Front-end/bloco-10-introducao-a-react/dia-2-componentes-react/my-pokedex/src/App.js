import React, { Component } from 'react';
import Pokedex from './Components/Pokedex';
import './App.css';

class App extends Component{
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Pokedex />
        </header>
      </div>
    );
  }
}

export default App;
