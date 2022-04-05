import { Component } from "react";
import './App.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return(
    <div>
      {conteudos.map(({conteudo, status, bloco}) => 
        <p className='App-content-box'>
          <strong>O conteúdo é</strong>: {conteudo} <br />
          <strong>Status</strong>: {status} <br />
          <strong>Bloco</strong>: {bloco} <br />
        </p>
      )}
    </div>
    )
  }
}

export default Content;