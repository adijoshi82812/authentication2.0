import { combineReducers } from "redux";
import { isLoggedReducer } from "./isLoggedReducer";
import { userReducer } from "./userReducer";

export const reducers = combineReducers({
  logged_in: isLoggedReducer,
  username: userReducer,
});
