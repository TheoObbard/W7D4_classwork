export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_SINGLE_POKEMON = "REQUEST_SINGLE_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

import * as APIUtil from "../util/api_util";

export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveSinglePokemon = pokemon => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    pokemon
  };
};

export const requestAllPokemon = () => dispatch => {
  APIUtil.fetchAllPokemon().then(response =>
    dispatch(receiveAllPokemon(response))
  );
};

export const requestSinglePokemon = id => dispatch => {
  APIUtil.fetchSinglePokemon(id).then(response =>
    dispatch(receiveSinglePokemon(response))
  );
};
