import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Data from '../Data';

class Pokedex extends Component {
  render() {
    return (
      <section >
          <h1 className='Title'>Pokédex</h1>
        <div className='PokedexSection'>
          {Data.map(({id, name, type, averageWeight, image}) => (
          <Pokemon key={id} 
          image={image}
          type={type}
          averageWeight={averageWeight}
          name={name}
          />
          ))}
        </div>
      </section>
    )
  }
}

export default Pokedex;