import { axiosBodyToAPI, sendQueryToAPI } from './axiosService';
import queryString from 'query-string';

const API_ADD_TO_CART = "http://localhost:5000/auth/carts/add";
const API_LIST_CART = "http://localhost:5000/auth/carts/list";

export const fetchCreateProductApi = (params) => {
    console.log('params', params)
    const body = params;
    return axiosBodyToAPI('POST', API_ADD_TO_CART, body);
};
export const fetchListProductApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    return sendQueryToAPI(`${API_LIST_CART}${queryParams}`);
};

// export const fetchInfoProductApi = (params = {}) => {
//     let queryParams = '';
//     if (Object.keys(params).length > 0) {
//         queryParams = `?${queryString.stringify(params)}`;
//     }
//     return sendQueryToAPI(`${API_INFO_PRODUCT}${queryParams}`);
// };

