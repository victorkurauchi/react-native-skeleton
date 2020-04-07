import { combineReducers } from 'redux';

// reducers
import { modalReducer } from '@/store/modal/reducers';
import { cityReducer } from '@/store/city/reducers';
import { catReducer } from '@/store/cat/reducers';
import { authReducer } from '@/store/auth/reducers';
import { tripReducer } from '@/store/trip/reducers';

export const rootReducer = combineReducers({
  modalReducer,
  cityReducer,
  catReducer,
  authReducer,
  tripReducer,
});
