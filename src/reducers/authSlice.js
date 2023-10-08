import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
    },
    reducers: {
        login_success: (state) => {
            state.isLogin=true
        },
    },
}) 
export const { login_success } = authSlice.actions
export default authSlice.reducer