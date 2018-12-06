import React from "react";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const Pokemon = this.props.pokemon.map(pok => (
      <li key={pok.id}>
        <h1>{pok.name}</h1>
        <img src={pok.image_url} />
      </li>
    ));

    return (
      <div>
        <ul>{Pokemon}</ul>
      </div>
    );
  }
}

export default PokemonIndex;
