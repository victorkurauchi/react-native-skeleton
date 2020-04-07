import { createSelector } from 'reselect'

import * as types from '@/store/trip/types';
import {
 createReducer, setValues,
} from '@/utils/reducerHelpers';
import { ReduxAction } from '@/interface/redux';

interface State {
  loading: boolean;
  error: Error|null;
  successMessage?: string;
  trips: any[],
  byIds: {},
}

const initialState = {
  loading: false,
  error: null,
  successMessage: null,
  trips: [],
  byIds: {},
}

const setFailure = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  error: action.payload.message,
  loading: false,
})

const setSuccess = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  error: null,
  loading: false,
  successMessage: action.payload.message,
})

const openLoader = setValues({ loading: true, error: null });

const addTripInSession = (state: State, action: ReduxAction<any>): State => ({
  ...state,
  error: null,
  loading: false,
  trips: [...state.trips, action.payload],
  byIds: {
    ...state.byIds,
    [action.payload.id]: action.payload,
  }
});

// selectors
export const tripByIdSelector = (id: number) => {
  return createSelector(
    (state: State) => state.trips,
    trips => trips ? trips.find(t => t.id == id) : {},
  );
};

export const tripReducer = createReducer(
  initialState,
  {
    [types.ADD_TRIP]: openLoader,
    [types.ADD_TRIP_FULFILLED]: setSuccess,
    [types.REQUEST_FAILED]: setFailure,
    [types.REQUEST_FULFILLED]: setSuccess,
    [types.GET_TRIP]: openLoader,
    [types.GET_TRIP_FULFILLED]: addTripInSession,
    [types.UPDATE_TRIP]: openLoader,
    [types.UPDATE_TRIP_FULFILLED]: setSuccess,
    [types.ADD_LINK_TO_TRIP]: openLoader,
    [types.ADD_LINK_TO_TRIP_FULFILLED]: setSuccess,
    [types.ADD_PARTICIPANT]: openLoader,
    [types.ADD_PARTICIPANT_FULFILLED]: setSuccess,
  },
);
