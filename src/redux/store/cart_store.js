import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cart_reducer from "../reducers/cart_reducer";

export const cart_store = createStore(cart_reducer, applyMiddleware(thunk));
