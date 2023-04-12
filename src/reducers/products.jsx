import { toastError, toastSuccess } from '../components/ToastHelper/toastHelper';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataList: [],
    dataInfo: {},
    isCreateSuccess: false,
    isDeleteSuccess: false,
    isLoading: true,
    isUpdateSuccess: false,
    pagination: {},
};
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // List
        // fetchListLevel(state: any, params: any) {
        //     state.dataList = [];
        //     state.error = null;
        // },
        // fetchListLevelSuccess: (state, action) => {
        //     const { data, items, paginator } = action.payload;
        //     state.pagination = paginator;
        //     state.dataList = items;
        // },
        // fetchListLevelFailed: (state, action) => {
        //     const { error } = action.payload;
        //     state.error = error;
        // },
        // Info
        // fetchInfoLevel(state: any, params: any) {
        //     state.dataInfo = {};
        //     state.error = null;
        // },
        // fetchInfoLevelSuccess: (state, action) => {
        //     // const { data, items } = action.payload;
        //     // console.log('action.payload', action.payload);

        //     state.dataInfo = action.payload;
        // },
        // fetchInfoLevelFailed: (state, action) => {
        //     const { error } = action.payload;
        //     state.error = error;
        // },

        // Create
        fetchCreateProduct(state, params) {
            state.error = null;
            state.isLoading = true;
            state.isCreateSuccess = false;
        },
        fetchCreateProductSuccess: (state, action) => {
            const { data, items, message } = action.payload;
            toastSuccess(message);
            state.isCreateSuccess = true;
            state.isLoading = false;
        },
        fetchCreateProductFailed: (state, action) => {
            const { error, message } = action.payload;
            toastError(error);
            state.isLoading = false;
            state.isCreateSuccess = false;
            state.error = error;
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
    fetchCreateProduct, fetchCreateProductSuccess, fetchCreateProductFailed,
    // fetchInfoLevel, fetchInfoLevelSuccess, fetchInfoLevelFailed,
    // fetchUpdateLevel, fetchUpdateLevelSuccess, fetchUpdateLevelFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
