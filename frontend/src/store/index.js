import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";

// Import your reducers here

const rootReducer = combineReducers({
  // user: null,
  // Add other reducers here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
