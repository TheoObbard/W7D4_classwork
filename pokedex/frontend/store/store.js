import { createStore, applyMiddlware } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";

export const configureStore = function() {
  return createStore(rootReducer, applyMiddlware(logger));
};
