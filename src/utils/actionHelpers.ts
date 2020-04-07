import { ReduxAction } from '@/interface/redux';

export const forwardPayload = <T>(actionType: string) => (payload: T): ReduxAction<T> => ({
  payload,
  type: actionType,
});

export const staticPayload = <T = undefined>(payload: T, actionType: string) => (): ReduxAction<T> => ({
  payload,
  type: actionType,
});

export const noPayload = (actionType: string) => staticPayload(undefined, actionType);
