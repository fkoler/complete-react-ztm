import { CATEGORIES_ACTION_TYPES } from './category.types';

import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchCategioriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategioriesSuccess = (categoriesArray) =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );

export const fetchCategioriesFailed = (err) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, err);
