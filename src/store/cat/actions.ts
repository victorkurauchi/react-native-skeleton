import * as types from '@/store/cat/types';
import { noPayload, forwardPayload } from '@/utils/actionHelpers';

export const addCat = forwardPayload<any>(types.ADD_CAT);
export const addCatFulfilled = forwardPayload<any>(types.ADD_CAT_FULFILLED);
export const requestFailed = forwardPayload<any>(types.REQUEST_FAILED);
export const requestFulfilled = forwardPayload<any>(types.REQUEST_FULFILLED);
