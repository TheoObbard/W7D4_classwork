import { connect } from "react-redux";
import { PokemonDetail } from "./pokemon_detail";
import { requestSinglePokemon } from "../../actions/pokemon_actions";

const mapStateToProps = (state, containerProps) => {
  return {
    pokemon: state.entities.pokemon[containerProps.match.params.id],
    pokemonId: containerProps.match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePokemon: id => dispatch(requestSinglePokemon(id))
  };
};

export const PokemonDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
