import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
