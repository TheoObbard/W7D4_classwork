import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
});

export default entitiesReducer;
