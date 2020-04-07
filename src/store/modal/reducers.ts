import * as types from '@/store/modal/types';
import { createReducer, addPayloadToKey } from '@/utils/reducerHelpers';
import { ReduxAction } from '@/interface/redux';
import { ModalConfig } from '@/store/modal/types';

interface State {
  isOpen: boolean;
  onClose?: Function;
  onConfirmation?: Function;
  content: any;
  isConfirmButtonEnabled: boolean;
  isLoading: boolean;
};

const baseState: State = {
  isOpen: false,
  content: null,
  isConfirmButtonEnabled: true,
  isLoading: false,
};

const openModal = (
  state: State,
  action: ReduxAction<ModalConfig>,
): State => ({
 ...state, ...action.payload, isOpen: true,
});

export const modalReducer = createReducer(
  { ...baseState },
  {
    [types.SET_CONFIRM_BUTTON_ENABLED]: addPayloadToKey('isConfirmButtonEnabled'),
    [types.OPEN_MODAL]: openModal,
    [types.CLOSE_MODAL]: (state) => ({ ...baseState }),
    [types.SET_LOADING]: addPayloadToKey('isLoading'),
  },
);
