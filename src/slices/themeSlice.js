import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "toggleTheme",
    initialState: {
        theme: "Light"
    },
    reducers: {
        toggleTheme: (state, action) => {
            if (state.theme === "Light") {
                state.theme = "Dark"
            } else {
                state.theme = "Light"
            }
        }
    }

})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer