export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_CONFIRM_BUTTON_ENABLED = 'SET_CONFIRM_BUTTON_ENABLED';
export const SET_LOADING = 'SET_LOADING';

export interface ModalConfig {
  onClose?: Function;
  onConfirmation?: Function;
  content: any;
  isConfirmButtonEnabled?: boolean;
}
