import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import word from "./modules/word";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ word });
const enhancer = applyMiddleware(...middlewares);

const store = legacy_createStore(rootReducer, enhancer);

export default store;
