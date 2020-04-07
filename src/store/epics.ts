import { combineEpics } from 'redux-observable';

// epics
import { fetchCitiesEpic } from '@/store/city/epics';
import { addCatEpic } from '@/store/cat/epics';
import { authenticateEpic } from '@/store/auth/epics';
import { addTripEpic, getTripEpic, updateTripEpic, addLinkToTripEpic, addParticipantToTripEpic } from '@/store/trip/epics';

export const rootEpic = combineEpics(
  fetchCitiesEpic,
  addCatEpic,
  authenticateEpic,
  addTripEpic,
  getTripEpic,
  updateTripEpic,
  addLinkToTripEpic,
  addParticipantToTripEpic,
);
