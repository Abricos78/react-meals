import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";

import { createRootReducers } from 'reducers'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory({basename: '/react-meals'})
const middlewares = [thunk, routerMiddleware(history)]

export const store = createStore(
    createRootReducers(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)