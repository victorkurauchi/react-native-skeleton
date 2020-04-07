import * as types from '@/store/trip/types';
import { noPayload, forwardPayload } from '@/utils/actionHelpers';

export const addTrip = forwardPayload<any>(types.ADD_TRIP);
export const addTripFulfilled = forwardPayload<any>(types.ADD_TRIP_FULFILLED);
export const requestFailed = forwardPayload<any>(types.REQUEST_FAILED);
export const requestFulfilled = forwardPayload<any>(types.REQUEST_FULFILLED);
export const getTrip = forwardPayload<any>(types.GET_TRIP);
export const getTripFulfilled = forwardPayload<any>(types.GET_TRIP_FULFILLED);
export const updateTrip = forwardPayload<any>(types.UPDATE_TRIP);
export const updateTripFulfilled = forwardPayload<any>(types.UPDATE_TRIP_FULFILLED);
export const addLinkToTrip = forwardPayload<any>(types.ADD_LINK_TO_TRIP);
export const addLinkToTripFulfufilled = forwardPayload<any>(types.ADD_LINK_TO_TRIP_FULFILLED);
export const addParticipantToTrip = forwardPayload<any>(types.ADD_PARTICIPANT);
export const addParticipantToTripFulfilled = forwardPayload<any>(types.ADD_PARTICIPANT_FULFILLED);
