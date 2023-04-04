import { configureStore,combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const rootreducer=combineReducers({user:Reducer});
const Store=configureStore({reducer:rootreducer,middleware:[thunk,logger]})
export default Store;