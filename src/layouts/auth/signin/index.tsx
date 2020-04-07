import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, Spinner } from '@ui-kitten/components';
import { ImageOverlay } from './extra/imageOverlayComponent';
import {
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  TwitterIcon,
} from './extra/icons';
import { KeyboardAvoidingView } from './extra/keyboardAvoidingView';

import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '@/store/auth/actions';
import { AppState } from '@/store';

import Modal from '@/components/modal';

export default ({ navigation }): React.ReactElement => {

  const dispatch = useDispatch();
  const authState = useSelector((state: AppState) => state.authReducer);
  const { error, successMessage, loading } = authState;

  const [identifier, setIdentifier] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const onSignInButtonPress = (): void => {
    dispatch(authenticate({ identifier, password }));
    // navigation && navigation.goBack();
  };

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate('Signup');
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate('ResetPassword');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/image-background.jpg')}>
        <View style={styles.headerContainer}>
          <Text
            category='h1'
            status='control'>
            Modern Group App
          </Text>
          <Text
            style={styles.signInLabel}
            category='s1'
            status='control'>
            Sign in to your account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status='control'
            placeholder='Username'
            icon={PersonIcon}
            value={identifier}
            onChangeText={setIdentifier}
          />
          <Input
            style={styles.passwordInput}
            status='control'
            placeholder='Password'
            icon={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance='ghost'
              status='control'
              onPress={onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>

        <Modal visible={false}><Button>modal</Button></Modal>

        { loading ? (<Spinner size="giant" status="basic" />) : (
          <Button
            style={styles.signInButton}
            size='giant'
            onPress={onSignInButtonPress}>
            SIGN IN
          </Button>
        )}

        {/* <View style={styles.socialAuthContainer}>
          <Text
            style={styles.socialAuthHintText}
            status='control'>
            Or Sign In using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={GoogleIcon}
            />
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={FacebookIcon}
            />
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={TwitterIcon}
            />
          </View>
        </View> */}
        <Button
          style={styles.signUpButton}
          appearance='ghost'
          status='control'
          onPress={onSignUpButtonPress}>
          Don't have an account? Sign Up
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});
