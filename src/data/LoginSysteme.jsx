import { createSlice } from "@reduxjs/toolkit";

const LoginSysteme = createSlice({
    name: "login",
    initialState: {
        users: [
            { email: "ayoub@gmail.com", pass: "12345", isLoged: false },
            { email: "ahmed@gmail.com", pass: "123", isLoged: false },
        ]
    },
    reducers: {
        add_users: (state, { payload }) => {
            state.users.push(payload)
        },
        is_logged: (state, { payload }) => {

        }
    }

})
export default LoginSysteme.reducer
export const { add_users, is_logged } = LoginSysteme.actions