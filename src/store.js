import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import themeReducer from "./slices/themeSlice"

const store = configureStore({
    reducer: {
        userInfo: userReducer,
        toggleTheme: themeReducer
    }
})

export default store;