import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productReducer } from "./product/product.reducer";

export const rootReducers = combineReducers({
  user: userReducer,
  product:productReducer
});
