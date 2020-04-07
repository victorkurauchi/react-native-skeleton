import { ReduxAction } from '@/interface/redux';

type KeyValue<T = any> = { [key: string]: T };
type ReducerHandler = (state: any, action: ReduxAction<any>) => any;

export const createReducer = (initialState: KeyValue<any>, handlers: KeyValue<ReducerHandler>) => {
  return (state: KeyValue<any> = initialState, action: ReduxAction<any>) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
};

export const addPayloadToKey = (key: string): ReducerHandler => (state: KeyValue, action: ReduxAction<any>) => ({
  ...state,
  [key]: action.payload,
});

export const setValues = (map: KeyValue): ReducerHandler => (state: KeyValue) => ({ ...state, ...map });

export const requestFailed = (state: any, action: ReduxAction<any>): any =>
  ({ ...state, loading: false, error: action.payload.message, success: '' });

export const requestSucceed = (state: any, action: ReduxAction<any>): any =>
({ ...state, loading: false, error: null, success: action.payload });
