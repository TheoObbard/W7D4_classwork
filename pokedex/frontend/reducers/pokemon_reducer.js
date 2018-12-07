import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON
} from "../actions/pokemon_actions";

export const pokemonReducer = (state = {}, action) => {
  var newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      Object.assign(newState, state, action.pokemon);
      return newState;
    default:
      return state;
  }
};
