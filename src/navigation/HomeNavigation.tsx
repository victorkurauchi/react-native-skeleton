import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeBottomNavigation } from './HomeBottomNavigation';
import { HomeDrawer } from './HomeDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/screens/Home';
import DetailsScreen from '@/screens/Details';
import SettingsScreen from '@/screens/Settings';
// import { LayoutsNavigator } from './layouts.navigator';
// import { ComponentsNavigator } from './components.navigator';
// import { ThemesNavigator } from './themes.navigator';
// import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
// import { HomeDrawer } from '../scenes/home/home-drawer.component';
// import { LibrariesScreen } from '../scenes/libraries/libraries.component';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = 'Home';

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Home', 'Settings', 'Components', 'Themes'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }): BottomTabNavigationOptions => {
  console.log('route?', route);
  const currentRoute = route.state && route.state.routes[route.state.index];
  console.log('currentRoute', currentRoute);
  console.log('visible?', currentRoute && isOneOfRootRoutes(currentRoute))
  return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={{ tabBarVisible: true }}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='Home' component={HomeStackScreen}/>
    <BottomTab.Screen name='Settings' component={SettingsStackScreen}/>
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    initialRouteName={initialTabRoute}
    drawerContent={props => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
    <Drawer.Screen name='Libraries' component={HomeTabsNavigator}/>
  </Drawer.Navigator>
);

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

/** Stack Screen */
function HomeStackScreen() {
  // List projects, checkin history
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
