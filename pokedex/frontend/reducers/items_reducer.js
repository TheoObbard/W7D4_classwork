import { RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";

export const itemsReducer = (state = {}, action) => {
  var newState = {};
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      Object.assign(newState, state, action.items);
      return newState;
    default:
      return state;
  }
};
