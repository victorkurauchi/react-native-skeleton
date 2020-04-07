import { createSelector } from 'reselect'

import * as types from '@/store/city/types';
import {
 createReducer, setValues,
} from '@/utils/reducerHelpers';
import { ReduxAction } from '@/interface/redux';

interface State {
  loading: boolean;
  error: Error|null;
  cities?: any[];
  successMessage?: string;
}

const initialState = {
  loading: false,
  cities: [],
  error: null,
  successMessage: null,
}

const setFailure = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  error: action.payload.customMessage,
  loading: false,
})

const setSuccess = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  error: null,
  loading: false,
  successMessage: action.payload.message,
})

const openLoader = setValues({ loading: true, error: null });

const setCitiesList = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  loading: false,
  cities: action.payload,
})

// selectors
export const cityItemsSelector = (state) => state.cities;

export const cityReducer = createReducer(
  {
    ...initialState,
  } as State,
  {
    [types.GET_CITIES]: openLoader,
    [types.GET_CITIES_FULFILLED]: setCitiesList,
    [types.REQUEST_FAILED]: setFailure,
    [types.REQUEST_FULFILLED]: setSuccess,
  },
);
