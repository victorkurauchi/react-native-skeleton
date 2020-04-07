import * as React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import configureStore from '@/store/index';
import Navigation from './src/navigation/Navigation';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Navigation />
      </ApplicationProvider>
    </Provider>
  );
}
