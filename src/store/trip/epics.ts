import { Observable, of, from } from 'rxjs';
import { ofType, StateObservable } from 'redux-observable';
import {
  map, catchError, switchMap, flatMap, mergeMap,
} from 'rxjs/operators';

import * as types from '@/store/trip/types';
import * as actions from '@/store/trip/actions';
import { Dependencies, ReduxAction } from '@/interface/redux';
import { AppState } from '@/store/index';

export const addTripEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { strapi }: Dependencies,
) => action$.pipe(
  ofType(types.ADD_TRIP),
  map((action: ReduxAction<any>) => action),
  flatMap((action) => from(strapi.addTrip(action.payload)).pipe(
    mergeMap(response => {
      return of(
        actions.addTripFulfilled(response),
        // go(-1)
      )
    }),
    catchError((e: Error) => of(
      actions.requestFailed(e),
    )),
  )),
);

export const getTripEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { strapi }: Dependencies,
) => action$.pipe(
  ofType(types.GET_TRIP),
  map((action: ReduxAction<any>) => action),
  flatMap((action) => from(strapi.getTrip(action.payload)).pipe(
    mergeMap(response => {
      return of(
        actions.getTripFulfilled(response),
      )
    }),
    catchError((e: Error) => of(
      actions.requestFailed(e),
    )),
  )),
);


export const updateTripEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { strapi }: Dependencies,
) => action$.pipe(
  ofType(types.UPDATE_TRIP),
  map((action: ReduxAction<any>) => action),
  flatMap((action) => from(strapi.updateTrip(
    state$.value.tripReducer.byIds[action.payload.id],
    action.payload)
  ).pipe(
    mergeMap(response => {
      return of(
        actions.updateTripFulfilled(response),
        actions.requestFulfilled({ message: 'Your trip was updated :)' }),
        actions.getTrip(action.payload.id),
        // go(-1)
      )
    }),
    catchError((e: Error) => of(
      actions.requestFailed(e),
    )),
  )),
)

export const addLinkToTripEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { strapi }: Dependencies,
) => action$.pipe(
  ofType(types.ADD_LINK_TO_TRIP),
  map((action: ReduxAction<any>) => action.payload),
  flatMap((payload) => from(strapi.addLinkToTrip(payload)).pipe(
    mergeMap(response => {
      return of(
        actions.getTrip(payload.trip),
        actions.addLinkToTripFulfufilled(response),
        actions.requestFulfilled({ message: 'Your link was added :)' }),
        // go(-1)
      )
    }),
    catchError((e: Error) => of(
      actions.requestFailed(e),
    )),
  )),
)

export const addParticipantToTripEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { strapi }: Dependencies,
) => action$.pipe(
  ofType(types.ADD_PARTICIPANT),
  map((action: ReduxAction<any>) => action.payload),
  switchMap((payload) => from(strapi.addParticipantToTrip(
    state$.value.tripReducer.byIds[payload.tripId],
    payload.email
  )).pipe(
    mergeMap(response => {
      return of(
        actions.getTrip(payload.tripId),
        actions.addParticipantToTripFulfilled(response),
        actions.requestFulfilled({ message: 'The participant was invited' }),
        // go(-1)
      )
    }),
    catchError((e: Error) => of(
      actions.requestFailed(e),
    )),
  )),
)
