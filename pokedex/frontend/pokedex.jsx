import React from "react";
import ReactDOM from "react-dom";
import { fetchAllPokemon } from "./util/api_util";
import {
  receiveAllPokemon,
  requestAllPokemon
} from "./actions/pokemon_actions";
import { configureStore } from "./store/store";
import { selectAllPokemon } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  var store;
  store = configureStore();
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<h1>this is react</h1>, rootEl);
});

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
