import RootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from 'redux';

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


const Store = createStore(
     RootReducer,
     composeWithDevTools(applyMiddleware(thunk))
)

export default Store;
//19.08