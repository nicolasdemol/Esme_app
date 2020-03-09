import React, { Component } from 'react'
import { Button, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Création des Screens
function MessagesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}


// Exportation du Stack Nav
const MessagesStack = createStackNavigator();

export default function MessagesStackScreen() {
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