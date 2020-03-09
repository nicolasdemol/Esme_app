import React, { Component } from 'react'
import { Button, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Création des Screens
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}


// Exportation du Stack Nav
const NotificationsStack = createStackNavigator();

export default function NotificationsStackScreen() {
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