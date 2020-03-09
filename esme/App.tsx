import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Importation des Stack Navs pour le Tab Nav
import AccueilStackScreen from './components/Accueil'
import RechercheStackScreen from './components/Recherche'
import MessagesStackScreen from './components/Messages'
import NotificationsStackScreen from './components/Notifications'
import ProfileStackScreen from './components/Profile'


// Création du Tab Nav
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
        initialRouteName='Accueil'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'home'
                : 'home';
            return <AntDesign name={iconName} size={size} color={color} />

            } else if (route.name === 'Recherche') {
              iconName = focused ? 'search1' : 'search1';
            return <AntDesign name={iconName} size={size} color={color} />

            } else if (route.name === 'Messages') {
              iconName = focused ? 'md-mail-open' : 'md-mail';
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
          showLabel: false,
          tabStyle: {
              scaleX: 1.2,
              scaleY: 1.2,
          }
        }}>
      <Tab.Screen name="Accueil" component={AccueilStackScreen} />
      <Tab.Screen name="Recherche" component={RechercheStackScreen} />
      <Tab.Screen name="Messages" component={MessagesStackScreen} />
      <Tab.Screen name="Notifications" component={NotificationsStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

// Exportation finale vers sortie
export default function App() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
