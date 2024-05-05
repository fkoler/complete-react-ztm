import { CATEGORIES_ACTION_TYPES } from './category.types';

import { createAction } from '../../utils/reducer/reducer.utils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const fetchCategioriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategioriesSuccess = (categoriesArray) =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );

const fetchCategioriesFailed = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategioriesAsync = () => async (dispatch) => {
    dispatch(fetchCategioriesStart());

    try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategioriesSuccess(categoriesArray));
    } catch (err) {
        dispatch(fetchCategioriesFailed(err));
    }
};
