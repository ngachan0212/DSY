/**
 * Created by Truongbx on 31/10/22.
 * truongbx@runsystem.net - Bui Xuan Truong
 */

import {
    fork,
} from 'redux-saga/effects';
import {watchImage} from './images';
import {watchProduct} from './products';

function* rootSaga() {
    yield fork(watchImage);
    yield fork(watchProduct);
}

export default rootSaga;
