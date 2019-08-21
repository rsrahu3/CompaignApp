import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer.js";
import thunk from "redux-thunk";

let initializeStore = initialData => {
  let store = createStore(reducer, initialData, applyMiddleware(thunk));
  return store;
};
export default initializeStore;
