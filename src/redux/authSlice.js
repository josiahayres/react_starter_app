import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../services/userAPI";

export const INITIAL_STATE = {
	user: {},
	loading: false,
	error: "",
	currentRequestId: undefined,
};

const fetchLogin = createAsyncThunk(
	"user/fetchLogin",
	async (username, password, { getState, requestId }) => {
		const { currentRequestId, loading } = getState().users;
		if (loading !== "pending" || requestId !== currentRequestId) {
			return;
		}
		const response = await login(username, password);
		return response.data;
	}
);

const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {},
	extraReducers: {
		[fetchLogin.pending]: (state, action) => {
			if (!state.loading) {
				state.loading = true;
				state.currentRequestId = action.meta.requestId;
			}
		},
		[fetchLogin.fulfilled]: (state, action) => {
			const { requestId } = action.meta;
			if (state.loading && state.currentRequestId === requestId) {
				state.loading = false;
				state.entities.push(action.payload);
				state.currentRequestId = undefined;
			}
		},
		[fetchLogin.rejected]: (state, action) => {
			const { requestId } = action.meta;
			if (state.loading && state.currentRequestId === requestId) {
				state.loading = false;
				state.error = action.error;
				state.currentRequestId = undefined;
			}
		},
	},
});

export default userSlice.reducer;
