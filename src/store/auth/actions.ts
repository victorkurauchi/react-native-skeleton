import * as types from '@/store/auth/types';
import { noPayload, forwardPayload } from '@/utils/actionHelpers';

export const authenticate = forwardPayload<any>(types.AUTHENTICATE);
export const authFulfilled = forwardPayload<any>(types.AUTH_FULFILLED);
export const requestFailed = forwardPayload<any>(types.REQUEST_FAILED);
export const requestFulfilled = forwardPayload<any>(types.REQUEST_FULFILLED);
