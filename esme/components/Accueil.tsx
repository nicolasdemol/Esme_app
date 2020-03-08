import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'

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

export default function AccueilScreen({ navigation }) {
	return(
		<Logo />
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004',
		alignItems: 'center',
		justifyContent: 'center'
	}
})