import React, { Component } from 'react'
import { StyleSheet, SectionList, Text, View, Button } from 'react-native'

class OptionsList extends Component {
	render() {
		return (
			<SectionList
				sections={[
					{title: '↓ Compte et connexion', data: ['Alcuin', 'IonisX', 'WebSudria']},
					]}
					renderItem={({item}) => <Text
						style={styles.item}>{item}</Text>}
					renderSectionHeader={({section}) => <Text
						style={styles.sectionHeader}>{section.title}</Text>}
					keyExtractor={(item, index) => index}
			/>
		)
	}
}

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
    	<OptionsList />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
