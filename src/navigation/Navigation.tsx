import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { navigationRef, isMountedRef } from './NavigationService';
import { AppState } from '@/store/index';
import HomeScreen from '@/screens/Home';
import DetailsScreen from '@/screens/Details';
import SettingsScreen from '@/screens/Settings';
import SignInScreen from '@/screens/Signin';
import SignUpScreen from '@/screens/Signup';
import ResetPasswordScreen from '@/screens/ResetPassword';
import { HomeBottomNavigation } from './HomeBottomNavigation';
import { HomeNavigator } from './HomeNavigation';

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const authState = useSelector((state: AppState) => state.authReducer);

  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  

  console.log('Auth reducer', authState)

  // if (authState.token == null) {
  //   return (
  //     <NavigationContainer ref={navigationRef}>
  //       <Stack.Navigator headerMode="none">
  //         <Stack.Screen name="Signin" component={SignInScreen} />
  //         <Stack.Screen name="Signup" component={SignUpScreen} />
  //         <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      <HomeNavigator />
      {/* <BottomTab.Navigator
        tabBar={props => <HomeBottomNavigation {...props} />}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <BottomTab.Screen name="Home" component={HomeStackScreen} />
        <BottomTab.Screen name="Settings" component={SettingsStackScreen} />
      </BottomTab.Navigator> */}
    </NavigationContainer>
  )
};

export default Navigation;
