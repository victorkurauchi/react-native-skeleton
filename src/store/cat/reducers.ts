import { createSelector } from 'reselect'

import * as types from '@/store/cat/types';
import {
 createReducer, setValues,
} from '@/utils/reducerHelpers';
import { ReduxAction } from '@/interface/redux';

interface State {
  loading: boolean;
  error: Error|null;
  cats?: any[];
  currentCat?: any;
  successMessage?: string;
}

const initialState = {
  loading: false,
  cats: [],
  currentCat: null,
  error: null,
  successMessage: null,
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

const addCatFulfilled = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  loading: false,
  error: null,
  successMessage: 'Cat was added.'
})

// selectors
export const cityItemsSelector = (state) => state.cities;

export const catReducer = createReducer(
  initialState,
  {
    [types.ADD_CAT]: openLoader,
    [types.ADD_CAT_FULFILLED]: addCatFulfilled,
    [types.REQUEST_FAILED]: setFailure,
    [types.REQUEST_FULFILLED]: setSuccess,
  },
);
