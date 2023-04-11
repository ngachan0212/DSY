import {axiosBodyToAPI} from './axiosService';
const API_CREATE_PRODUCT = "http://localhost:5000/auth/products/create";


export const fetchCreateProductApi = (params) => {
    console.log('params',params)
    const body = params ;
    return axiosBodyToAPI('POST', API_CREATE_PRODUCT, body);
};

