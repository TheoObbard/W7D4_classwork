import { createStore, applyMiddlware } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";

export const configureStore = () =>
  createStore(rootReducer, applyMiddlware(logger));
