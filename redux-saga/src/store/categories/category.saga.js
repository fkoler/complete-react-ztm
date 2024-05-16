import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
    fetchCategioriesSuccess,
    fetchCategioriesFailed,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategioriesAsync() {
    try {
        const categoriesArray = yield call(
            getCategoriesAndDocuments,
            'categories'
        );

        yield put(fetchCategioriesSuccess(categoriesArray));
    } catch (err) {
        yield put(fetchCategioriesFailed(err));
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategioriesAsync
    );
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}
