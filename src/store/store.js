import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducers } from "./root.reducer";

const middleware = [logger];
const composeEnhance = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducers, undefined, composeEnhance);
