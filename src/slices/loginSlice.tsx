import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    email: "",
    roles: [],
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initialState,
    reducers: {
        login: (_, action) => {
            return {
                isLogin: !!action.payload.email,
                email: action.payload.email,
                roles: action.payload.roles,
            };
        },
        logout: () => {
            return initialState;
        }
    }
});

export const {login, logout} = loginSlice.actions;

export default loginSlice.reducer;