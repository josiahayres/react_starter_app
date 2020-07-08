import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";

const rootReducer = combineReducers({
	authentication: authSlice,
});

export default rootReducer;
