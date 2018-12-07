import React from "react";
import { PokemonIndexItem } from "./pokemon_index_item";
import { Route } from "react-router-dom";
import { PokemonDetailContainer } from "./pokemon_detail_container";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className="pokedex">
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />

        <ul>
          {this.props.pokemon.map(pokemon => (
            <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
