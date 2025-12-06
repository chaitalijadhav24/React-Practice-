import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import Reducer  from "./Reducer.js";

const middleWare=[thunk]

const store=createStore(
    Reducer,
    applyMiddleware(
        ...middleWare
    )
)

export default store;