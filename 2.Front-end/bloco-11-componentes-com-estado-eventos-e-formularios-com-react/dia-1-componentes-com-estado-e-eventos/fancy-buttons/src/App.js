import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log(`Clicou no botão`)
  }
  
  render() {
    return (
      <div className='App-header'>
        <h1>Fancy Buttons</h1>
        <div>
          <button type="button" onClick={this.handleClick}>Meu botão 1</button>
          {/* <button type="button" onClick={this.handleClick}>Meu botão 2</button>
          <button type="button" onClick={this.handleClick}>Meu botão 3</button> */}
        </div>
      </div>
    )
  }
}

export default App;