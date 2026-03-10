import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("tb_token") || null,
    user: JSON.parse(localStorage.getItem("tb_user") || "null"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setCredentials: (state, action) => {
            const { token, user } = action.payload;

            state.token = token;
            state.user = user;

            localStorage.setItem("tb_token", token);
            localStorage.setItem("tb_user", JSON.stringify(user));
        },

        // add logout later
        // logout: (state) => {
        //     state.token = null;
        //     state.user = null;

        //     localStorage.removeItem("tb_token");
        //     localStorage.removeItem("tb_user");
        // },
    },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;