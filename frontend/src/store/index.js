import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import messengerFriendsReducer from "./reducers/messengerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  messengerFriends: messengerFriendsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
