import { createSelector } from 'reselect'

import * as types from '@/store/auth/types';
import {
 createReducer, setValues,
} from '@/utils/reducerHelpers';
import { ReduxAction } from '@/interface/redux';

interface State {
  loading: boolean;
  error: Error|null;
  user?: any;
  successMessage?: string;
  isAuthenticated: boolean;
  token?: string;
}

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  successMessage: null,
  token: null,
}

const setFailure = (state: State, action: ReduxAction<any>): State => {
  console.log('error', action.payload) 
  return {
  ...state,
  error: action.payload.message,
  loading: false,
  }
}

const setSuccess = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  error: null,
  loading: false,
  successMessage: action.payload.message,
})

const openLoader = setValues({ loading: true, error: null });

const addUserInSession = (state: State, action: ReduxAction<any>): State => {

  console.log('Adding user in session', action.payload)

  return {
    ...state,
    loading: false,
    user: action.payload.user,
    token: action.payload.jwt,
    isAuthenticated: true,
    error: null,
    successMessage: 'You have logged in :)'
  }
}

// selectors
export const cityItemsSelector = (state: State) => state;

export const authReducer = createReducer(
  initialState,
  {
    [types.AUTHENTICATE]: openLoader,
    [types.AUTH_FULFILLED]: addUserInSession,
    [types.REQUEST_FAILED]: setFailure,
    [types.REQUEST_FULFILLED]: setSuccess,
  },
);
