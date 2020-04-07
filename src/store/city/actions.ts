import * as types from '@/store/city/types';
import { noPayload, forwardPayload } from '@/utils/actionHelpers';

export const getCities = forwardPayload<any>(types.GET_CITIES);
export const getCitiesFulfilled = forwardPayload<any>(types.GET_CITIES_FULFILLED);
export const requestFailed = forwardPayload<any>(types.REQUEST_FAILED);
export const requestFulfilled = forwardPayload<any>(types.REQUEST_FULFILLED);
