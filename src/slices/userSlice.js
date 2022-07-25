import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        user: {
            name: "Lord Voldemort",
            email: "tmriddle@hogwarts.com",
            location: "UK"
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, actions) => {
            state.user = {}
            console.log("Logout called")
        }
    }
}
)

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;