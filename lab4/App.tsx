import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import store from './src/Store';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Contact from './src/Contacts';
import ProfileContact from './src/ProfileContact';
import Favorite from './src/Favorite';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <TabNavigator /> */}
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const BottomNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabContacts" component={ContactScreens} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

const TabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="TabContacts"
      barStyle={{backgroundColor: theme.colors.surface}}
      labeled={false}
      activeColor={theme.colors.primaryContainer}
      inactiveColor={theme.colors.secondary}>
      <Tab.Screen
        name="TabContacts"
        component={ContactScreens}
        options={{tabBarIcon: 'format-list-bulleted'}}></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{tabBarIcon: 'star-check'}}></Tab.Screen>
    </Tab.Navigator>
  );
};

function ContactScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Contacts"
        component={Contact}
        options={{title: 'Contacts'}}
      />
      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile Contact'}}
      />
    </Stack.Navigator>
  );
}

function FavoriteScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Favorites"
        component={Favorite}
        options={{title: 'Favorites'}}></Stack.Screen>
      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile Contact'}}
      />
    </Stack.Navigator>
  );
}
