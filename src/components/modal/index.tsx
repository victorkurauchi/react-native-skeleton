import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Modal, ModalProps, Text } from '@ui-kitten/components';
import styled from 'styled-components/native';
import { opacify } from 'polished';

import { PADDING_DEFAULT, STATUS_BAR_HEIGHT } from '@/layouts/constants';
import { AppState } from '@/store';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '@/store/modal/actions';

const ModalShowcase = (props: ModalProps): React.ReactElement => {
  const dispatch = useDispatch();
  const uiState = useSelector((state: AppState) => state.modalReducer);

  const toggleModal = () => {
    dispatch(closeModal());
  }

  if (!uiState.isOpen) return (<></>);

  return (
    <React.Fragment>
      <Background>
        <Modal
          {...props}
          style={styles.container}
          visible={uiState.isOpen}
          onBackdropPress={toggleModal}>
          <Text category="h5">{uiState.content}</Text>
          <Button
            size="small"
            style={styles.button}
            onPress={toggleModal}>
            OK
          </Button>
        </Modal>
      </Background>
    </React.Fragment>
  );
};

export default ModalShowcase;

const styles = StyleSheet.create({
  button: {
    marginTop: 4,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 30,
    backgroundColor: '#fff',
  },
});

const padding = PADDING_DEFAULT * 2;

export const Background = styled(View)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${padding + STATUS_BAR_HEIGHT}px ${padding}px ${padding}px;
  background: ${opacify(0.1, 'rgba(255, 255, 255, 0.3)')};
` as any;
