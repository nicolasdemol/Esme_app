import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class About extends Component {
	render() {
		return (
			<View style={styles.test}>
			<Text>A propos de moi</Text>
			<Text>
				Test
			</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
