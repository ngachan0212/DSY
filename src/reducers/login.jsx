import { toastError, toastSuccess } from '../components/ToastHelper/toastHelper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    infoLogin: {},
};
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // login
        fetchLogin(state, params) {
            state.infoLogin = null;
        },
        fetchLoginSuccess: (state, action) => {
            const { data, message } = action.payload;
            toastSuccess(message);
            state.infoLogin = data;
        },
        fetchLoginFailed: (state, action) => {
            const { message } = action.payload;
            toastError({
                message,
            });
        },
        // Update
        // fetchUpdateLevel(state: any, params: any) {
        //     state.dataUpdate = [];
        //     state.error = null;
        //     state.isLoading = true;
        //     state.isUpdateSuccess = false;
        // },
        // fetchUpdateLevelSuccess: (state, action) => {
        //     const { data, items, message } = action.payload;
        //     toastSuccess(message);
        //     state.isUpdateSuccess = true;
        //     state.isLoading = false;
        // },
        // fetchUpdateLevelFailed: (state, action) => {
        //     const { error } = action.payload;
        //     toastError(error);
        //     state.isLoading = false;
        //     state.isUpdateSuccess = false;
        //     state.error = error;
        // },
    },
});
export const {
    // fetchListLevel, fetchListLevelSuccess, fetchListLevelFailed,
    fetchLogin, fetchLoginSuccess, fetchLoginFailed,
    // fetchInfoLevel, fetchInfoLevelSuccess, fetchInfoLevelFailed,
    // fetchUpdateLevel, fetchUpdateLevelSuccess, fetchUpdateLevelFailed,
} = loginSlice.actions;

export default loginSlice.reducer;
