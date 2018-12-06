import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

export const pokemonReducer = (state = {}, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign(newState, action.pokemon);
    default:
      return state;
  }
};
