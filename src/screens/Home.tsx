import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import Hello from '@/components/Hello';
import { TopNavigationAction, TopNavigation, Divider } from '@ui-kitten/components';
import { MenuIcon } from '@/components/Icons';
import { SafeAreaLayout } from '@/components/SafeAreaLayout';

const HomeScreen = ({ navigation }): React.ReactElement => {

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  return (
    <View>
      <TopNavigation
        title="Modern Group App"
        leftControl={renderDrawerAction()}
      />
      <Divider/>
      <Text>Home!</Text>
      <Hello />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});


export default HomeScreen;
