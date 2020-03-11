import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import { SearchBar, Button, Input } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

// Element de la barre de Recherche
class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
      	placeholderTextColor={'#aaa'}
      	containerStyle={{
      		backgroundColor: 'transparent',
      		borderBottomColor: 'transparent',
      		borderTopColor: 'transparent',
      	}}
      	inputContainerStyle={{
      		backgroundColor: 'transparent',
      		paddingRight: 205,
      	}}
      	inputStyle={{
      		color: 'black'
      	}}
      	selectionColor='lightblue'
      	autoFocus
        placeholder="Rechercher"
        onChangeText={this.updateSearch}
        value={search}
        searchIcon={false}
        rightIconContainerStyle={{
        	position: 'absolute',
        	right: 0,
        }}
        clearIcon={<Button 
        	icon={<Ionicons name={'ios-close'} size={40} color={'black'} />}
        	buttonStyle={{
        		backgroundColor: 'transparent'
        	}}
        	onPress={ () => this.setState({search: ''})}
        />}
      />
    );
  }
}



// StyleSheet des Components Recherche
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		color: 'black',
		margin: 80,
		padding: 20
	}
})



// Creation des Screens
const RechercheStack = createStackNavigator();


// Interface de Calendrier
function RechercheScreen({ navigation }) {
  return (
   	<View style={styles.container}>
   		<Text>Zone de Calendrier / Agenda</Text>
   	</View>
  );
}

// Creétion des Screens du Recent TopNav

function Top({ navigation })  {
	return (
		<View style={styles.container}>
			<Text>Listes  des Recherches Récentes</Text>
		</View>
	);
}

function recentCompte({ navigation })  {
	return (
		<View style={styles.container}>
			<Text>Listes  des Recherches Récentes (pour Comptes)</Text>
		</View>
	);
}

function recentCalendrier({ navigation })  {
	return (
		<View style={styles.container}>
			<Text>Listes  des Recherches Récentes (pour Calendrier)</Text>
		</View>
	);
}

// Création du Recent TopNav
const Recent = createMaterialTopTabNavigator();

function RechercheNavScreen({navigation}) {
	return (
		<Recent.Navigator
	      initialRouteName="Top"
	      timingConfig={{
	      	duration: 100
	      }}
	      tabBarOptions={{
	        activeTintColor: 'black',
	        tabStyle: {
	        	paddingTop: 0,
	        	height: 40
	        },
	        inactiveTintColor: '#aaa',
	        labelStyle: { fontWeight: 'bold', fontSize: 14, fontFamily: 'sans-serif' },
	        pressColor: 'white',
	        indicatorStyle:{ backgroundColor: 'black', height: 1},
	      }}
	    >
	    <Recent.Screen
	        name="Top"
	        component={Top}
	        options={{ tabBarLabel: 'Top' }}
	    />
	    <Recent.Screen
	        name="Compte"
	        component={recentCompte}
	        options={{ tabBarLabel: 'Comptes' }}
	    />
	    <Recent.Screen
	        name="Calendrier"
	        component={recentCalendrier}
	        options={{ tabBarLabel: 'Calendrier' }}
	    />
	    </Recent.Navigator>
	);
}


// Exportation de l'ensemble du Stack Nav
export default function RechercheStackScreen() {
  return (
    <RechercheStack.Navigator
    screenOptions={{
    	animationEnabled: false
    }}>
      <RechercheStack.Screen 
      	name="Recherche" 
      	component={RechercheScreen}
      	options={({ navigation }) => ({
      		headerTitle: null,
      		headerRight: props => <Button
      			type='clear'
      			icon={<Ionicons name={'ios-apps'} size={28} color={'black'} />}
      			TouchableComponent={TouchableOpacity}
      			buttonStyle={{
      				paddingLeft: 20,
      				marginRight: 5,
      			}}
      			/>,
      		headerLeft: props => <Button
      			icon={<Ionicons name={'ios-search'} size={28} color={'black'} />}
      			type='clear'
      			title='Rechercher'
      			TouchableComponent={TouchableWithoutFeedback}
      			titleStyle={{
      				fontFamily: 'sans-serif',
      				fontSize: 18,
      				color: '#aaa',
      				paddingLeft: 10,
      				marginBottom: 1.5,
      				paddingRight: 165,
      			}}
      			buttonStyle={{
      				marginLeft: 5,
      			}}
      			onPress={() => navigation.navigate('RechercheNav')}
      			/>,
      	})}
      />
      <RechercheStack.Screen 
      	name="RechercheNav" 
      	component={RechercheNavScreen} 
      	options={({navigation: { goBack }}) => ({
      		headerTitle: props => <Search />,
      		headerStyle:{ 
      			shadowOpacity: 0, //remove shadow on IOS
      			elevation: 0 //remove shadow android
      		},
      		headerTitleContainerStyle: {
      			left: 45,
      		},
      		headerLeft: props => <Button 
      		icon={<Ionicons name={'ios-arrow-round-back'} size={44} color={'black'} />}
      		buttonStyle={{
      			paddingLeft: 15,
      			paddingRight: 13,
      			backgroundColor: 'transparent'
      		}}
      		onPress={() => goBack()}
      		/>,
      	})}
      />
    </RechercheStack.Navigator>
  );
}