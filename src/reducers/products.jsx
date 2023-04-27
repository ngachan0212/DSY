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
        //List
        fetchListProduct(state, params) {
            state.dataList = [];
            state.error = null;
        },
        fetchListProductSuccess: (state, action) => {
            const { data } = action.payload;
            state.pagination = data.paginator;
            state.dataList = data.items;
        },
        fetchListProductFailed: (state, action) => {
            const { error } = action.payload;
            state.error = error;
        },
        // Info
        fetchInfoProduct(state, params) {
            state.dataInfo = {};
            state.error = null;
        },
        fetchInfoProductSuccess: (state, action) => {
            state.dataInfo = action.payload.data;
        },
        fetchInfoProductFailed: (state, action) => {
            const { error } = action.payload;
            state.error = error;
        },

        // Create
        fetchCreateProduct(state, params) {
            state.error = null;
            state.isLoading = true;
            state.isCreateSuccess = false;
        },
        fetchCreateProductSuccess: (state, action) => {
            const { message } = action.payload;
            toastSuccess(message);
            state.isCreateSuccess = true;
            state.isLoading = false;
        },
        fetchCreateProductFailed: (state, action) => {
            const { error } = action.payload;
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
    fetchListProduct, fetchListProductSuccess, fetchListProductFailed,
    fetchCreateProduct, fetchCreateProductSuccess, fetchCreateProductFailed,
    fetchInfoProduct, fetchInfoProductSuccess, fetchInfoProductFailed,
    // fetchUpdateLevel, fetchUpdateLevelSuccess, fetchUpdateLevelFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
