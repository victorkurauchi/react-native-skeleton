import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';
import Hello from '@/components/Hello';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Hello />
    </View>
  );
}
