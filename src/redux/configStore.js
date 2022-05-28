import { legacy_createStore, combineReducers } from "redux";
import word from "./modules/word";

const rootReducer = combineReducers({ word });

const store = legacy_createStore(rootReducer);

export default store;
