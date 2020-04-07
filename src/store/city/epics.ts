import { Observable, of, from } from 'rxjs';
import { ofType, StateObservable } from 'redux-observable';
import {
 map, catchError, switchMap, flatMap, tap,
} from 'rxjs/operators';

import * as types from '@/store/city/types';
import * as actions from '@/store/city/actions';
import { Dependencies, ReduxAction } from '@/interface/redux';
import { AppState } from '@/store/index';

export const fetchCitiesEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { github }: Dependencies,
) => action$.pipe(
  ofType(types.GET_CITIES),
  map((action: ReduxAction<any>) => action),
  flatMap((action) => from(github.getCities()).pipe(
    map(response => {
      return response.filter((place: any) => 
        place.city.toLowerCase().includes(action.payload) ||
        place.state.toLowerCase().includes(action.payload)
      )
    }),
    map((filtered) => {
      console.log('f', filtered); 
      return actions.getCitiesFulfilled(filtered)
    }),
    catchError((e: Error) => of(
      actions.requestFailed(e),
    )),
  )),
);
