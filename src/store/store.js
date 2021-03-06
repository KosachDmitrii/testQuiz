import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
window.store = store;
export default store;
