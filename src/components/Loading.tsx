import * as React from 'react';
import LottieView from 'lottie-react-native';
import { Spinner, SpinnerElement, SpinnerProps } from '@ui-kitten/components';

// const Loading = () => {
//   return (
//     <LottieView source={require('./animations/loading.json')} autoPlay loop />
//   );
// };

const Loading = (props?: SpinnerProps): SpinnerElement => (
  <Spinner {...props} />
);

export default Loading;
