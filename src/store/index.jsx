import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default Store;
