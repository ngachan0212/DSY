/**
 * Created by Truongbx on 31/10/22.
 * truongbx@runsystem.net - Bui Xuan Truong
 */

import {
    fork,
} from 'redux-saga/effects';
import { watchImage } from './images';
import { watchProduct } from './products';
import { watchLogin } from './login';
import { watchCart } from './carts';
import { watchOrder } from './orders';

function* rootSaga() {
    yield fork(watchImage);
    yield fork(watchProduct);
    yield fork(watchLogin);
    yield fork(watchCart);
    yield fork(watchOrder);
}

export default rootSaga;
