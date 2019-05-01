import thunk from "redux-thunk";
import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import { content } from "./reducer";
import { combineReducers } from "redux";
const appReducer = combineReducers({ content });
const store = createStore(appReducer, compose(applyMiddleware(thunk)));
export default store;
