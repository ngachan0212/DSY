import {
    fetchCreateProductApi,
} from '../api/productsAPI';

import {
    fetchCreateProduct, fetchCreateProductSuccess, fetchCreateProductFailed,
} from '../reducers/products';
import {
    call,
    delay, put,
    takeLatest,
} from 'redux-saga/effects';



// Create
function* actionFetchCreateProduct(action) {
    try {
        // yield put(showLoading());
        yield delay(500);
        const { params } = action.payload;
        const response = yield call(fetchCreateProductApi, params);
        const { status, data } = response;
        if ( data.success === true) {
            yield put(fetchCreateProductSuccess(data));
        } else {
            yield put(fetchCreateProductFailed(data));
        }
        // yield put(hideLoading());
    } catch (error) {
        // yield put(hideLoading());
        yield put(fetchCreateProductFailed(error));
    }
}


export function* watchProduct() {
    yield takeLatest(fetchCreateProduct.type, actionFetchCreateProduct);

}
