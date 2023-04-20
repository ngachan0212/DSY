import {axiosBodyToAPI, sendQueryToAPI} from './axiosService';
import queryString from 'query-string';

const API_CREATE_PRODUCT = "http://localhost:5000/auth/products/create";
const API_LIST_PRODUCT = "http://localhost:5000/auth/products/list";


export const fetchCreateProductApi = (params) => {
    console.log('params',params)
    const body = params ;
    return axiosBodyToAPI('POST', API_CREATE_PRODUCT, body);
};
export const fetchListProductApi = (params={}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_PRODUCT}${queryParams}`);
};

