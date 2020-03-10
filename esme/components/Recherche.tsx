import React, { Component } from 'react'
import { StyleSheet, StatusBar, Text, View, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import { SearchBar, Button, Input } from 'react-native-elements'
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
      	placeholderTextColor={'#aaa'}
      	containerStyle={{
      		backgroundColor: 'transparent',
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


function RechercheScreen({ navigation }) {
  return (
   	<View style={styles.container}>
   		<Text>Zone de Calendrier / Agenda</Text>
   	</View>
  );
}

function RechercheNavScreen({navigation}) {
	return (
		<View style={styles.container} >
		<Text>Liste des Anciennes recherches effectuées</Text>
		</View>
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
      		headerTitleContainerStyle: {
      			left: 45
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