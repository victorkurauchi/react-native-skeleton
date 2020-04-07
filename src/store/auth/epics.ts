import { Observable, of, from } from 'rxjs';
import { ofType, StateObservable } from 'redux-observable';
import {
 map, catchError, switchMap, flatMap, tap, mergeMap, delay, mapTo,
} from 'rxjs/operators';

import * as types from '@/store/auth/types';
import * as actions from '@/store/auth/actions';
import * as modalActions from '@/store/modal/actions';

import { Dependencies, ReduxAction } from '@/interface/redux';
import { AppState } from '@/store/index';
// import { navigate } from '@/navigation/NavigationService';

export const authenticateEpic = (
  action$: Observable<ReduxAction<any>>,
  state$: StateObservable<AppState>,
  { strapi }: Dependencies,
) => action$.pipe(
  ofType(types.AUTHENTICATE),
  map((action: ReduxAction<any>) => action),
  flatMap((action) => from(strapi.login(action.payload)).pipe(
    mergeMap(response => {
      return of(
        actions.authFulfilled(response),
      )
    }),
    catchError((e: Error) => of(
      modalActions.openModal({ content: e.message || 'Error authenticating your user' }),
      actions.requestFailed(e),
    )),
  )),
);
