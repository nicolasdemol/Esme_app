import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Element du Logo Principal
class Logo extends Component {
	render() {
		return(
   			<View style={styles.container} >
   				<Image 
   					style={{width: '72%', height: '25%'}}
   					source={require('../assets/esme.png')} 
   				/>
    		</View>
		)
	}
}

// StyleSheet des Components Accueil
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004',
		alignItems: 'center',
		justifyContent: 'center'
	}
})


// Création des Screens
const AccueilStack = createStackNavigator();

function AccueilScreen({ navigation }) {
	return(
		<Logo />
	)
}

// Exportation de l'ensemble du Stack Nav
export default function AccueilStackScreen() {
  return (
    <AccueilStack.Navigator
      screenOptions={{
        title: 'Version Alpha 0.12',
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


