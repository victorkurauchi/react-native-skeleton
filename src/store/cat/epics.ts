import { Observable, of, from } from 'rxjs';
import { ofType, StateObservable } from 'redux-observable';
import {
 map, catchError, switchMap, flatMap, tap,
} from 'rxjs/operators';

import * as types from '@/store/cat/types';
import * as actions from '@/store/cat/actions';
import { Dependencies, ReduxAction } from '@/interface/redux';
import { AppState } from '@/store/index';

export const addCatEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { backend }: Dependencies,
) => action$.pipe(
  ofType(types.ADD_CAT),
  map((action: ReduxAction<any>) => action),
  flatMap((action) => from(backend.addCat(action.payload)).pipe(
    map(response => actions.addCatFulfilled({})),
    catchError((e: Error) => of(
      actions.requestFailed(e),
    )),
  )),
);
