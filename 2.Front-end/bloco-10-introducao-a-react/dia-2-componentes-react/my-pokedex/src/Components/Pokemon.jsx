import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className="PokemonCard">
        <img src={image} alt={`Imagem de ${name}`}></img>
        <span>Nome: {name}</span>
        <span>Tipo: {type}</span>
        <span>Peso: {averageWeight.value}{averageWeight.measurementUnit}</span>
      </div>
    )    
  }
}

Pokemon.propTypes = {
  nome: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired
  }),
  image: PropTypes.string.isRequired
}

export default Pokemon;