import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store";
import Root from "./components/root";
import { HashRouter, Route } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  var store;
  store = configureStore();
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
