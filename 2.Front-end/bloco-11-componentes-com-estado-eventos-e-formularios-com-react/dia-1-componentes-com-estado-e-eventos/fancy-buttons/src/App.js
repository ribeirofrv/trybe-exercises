import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClickOne() {
  console.log('Clicou no botão 1')
}

function handleClickTwo() {
  console.log('Clicou no botão 2')
}

function handleClickThree() {
  console.log('Clicou no botão 3')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div className='App-header'>
        <h1>Fancy Buttons</h1>
        <div>
          <button onClick={handleClickOne}>Meu botão 1</button>
          <button onClick={handleClickTwo}>Meu botão 2</button>
          <button onClick={handleClickThree}>Meu botão 3</button>
        </div>
      </div>
    )
  }
}

export default App;