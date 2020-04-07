import * as types from '@/store/modal/types';
import { noPayload, forwardPayload } from '@/utils/actionHelpers';

export const openModal = forwardPayload<types.ModalConfig>(types.OPEN_MODAL);
export const setConfirmButtonEnabled = forwardPayload<boolean>(types.SET_CONFIRM_BUTTON_ENABLED);
export const closeModal = noPayload(types.CLOSE_MODAL);
export const setLoading = forwardPayload<boolean>(types.SET_LOADING);
