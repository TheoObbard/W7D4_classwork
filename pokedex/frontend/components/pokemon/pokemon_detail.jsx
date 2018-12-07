import React from "react";

export class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is our props:", this.props);
  }

  componentDidMount() {
    this.props.fetchSinglePokemon(this.props.pokemonId);
  }

  render() {
    debugger;
    if (this.props.pokemon === undefined) {
      return null;
    }

    if (this.props.pokemon.attack === undefined) return null;

    const pokemon = this.props.pokemon;
    return (
      // photo, name, type, attack, defense, moves, items(component)
      <div>
        <h1>{pokemon.name}</h1>
        <h2>{`Attack: ${pokemon.attack[0]}`}</h2>
      </div>
    );
  }
}
