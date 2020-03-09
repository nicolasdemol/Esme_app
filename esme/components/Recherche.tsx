import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar, Button } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
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
      	lightTheme
      	containerStyle={{
      		backgroundColor: 'white'
      	}}
      	inputContainerStyle={{
      		backgroundColor: '#eee'
      	}}
        placeholder="..."
        onChangeText={this.updateSearch}
        value={search}
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

function RechercheScreen({ navigation }) {
  return (
   	<View style={styles.container}>
   		<Text>Zone de recherche non détaillée</Text>
   		<Button 
   			type='solid'
   			icon={
   			<Ionicons
      			name="ios-search"
      			size={30}
      			color='white'
      		/>
      		}
      		buttonStyle={{
      			padding: 10

      		}}
    		title="Rechercher" 
    		onPress={() => navigation.navigate('Recherche2')}
    		/>
   	</View>
  );
}

function RechercheScreen2({navigation}) {
	return (
		<Search />
	);
}


// Exportation de l'ensemble du Stack Nav
export default function RechercheStackScreen() {
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
      <RechercheStack.Screen name="Recherche2" component={RechercheScreen2} />
    </RechercheStack.Navigator>
  );
}