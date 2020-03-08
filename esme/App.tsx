import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import AccueilScreen from './components/Accueil'
import RechercheScreen from './components/Recherche'
import MessagesScreen from './components/Messages'
import NotificationsScreen from './components/Notifications'
import ProfileScreen from './components/Profile'

const AccueilStack = createStackNavigator();

function AccueilStackScreen() {
  return (
    <AccueilStack.Navigator
      screenOptions={{
        title: 'Version Alpha 0.11',
        headerStyle: {
          backgroundColor: '#004',
        },
        headerTintColor: '#fff',
      }}
    >
      <AccueilStack.Screen name="ESME" component={AccueilScreen} />
    </AccueilStack.Navigator>
  );
}

const RechercheStack = createStackNavigator();

function RechercheStackScreen() {
  return (
    <RechercheStack.Navigator
      screenOptions={{
        title: 'Recherche',
        headerStyle: {
          backgroundColor: '#004',
        },
        headerTintColor: '#fff',
      }}
    >
      <RechercheStack.Screen name="Recherche" component={RechercheScreen} />
    </RechercheStack.Navigator>
  );
}

const MessagesStack = createStackNavigator();

function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator
      screenOptions={{
        title: 'Messages',
        headerStyle: {
          backgroundColor: '#004',
        },
        headerTintColor: '#fff',
      }}
    >
      <MessagesStack.Screen name="Messages" component={MessagesScreen} />
    </MessagesStack.Navigator>
  );
}

const NotificationsStack = createStackNavigator();

function NotificationsStackScreen() {
  return (
    <NotificationsStack.Navigator
      screenOptions={{
        title: 'Notifications',
        headerStyle: {
          backgroundColor: '#004',
        },
        headerTintColor: '#fff',
      }}
    >
      <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} />
    </NotificationsStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#004',
        },
        headerTintColor: '#fff',
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'ios-bookmark'
                : 'ios-bookmark';
            } else if (route.name === 'Recherche') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#007',
          inactiveTintColor: 'gray',
        }}>
      <Tab.Screen name="Accueil" component={AccueilStackScreen} />
      <Tab.Screen name="Recherche" component={RechercheStackScreen} />
      <Tab.Screen name="Messages" component={MessagesStackScreen} />
      <Tab.Screen name="Notifications" component={NotificationsStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
