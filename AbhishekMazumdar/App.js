import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import Constants from 'expo-constants'

import contacts, {compareNames} from './contacts';
import Row from './Components/Row';

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts
  }

  // sort function 
  sort = () => {
    this.setState(prevState => {prevState.contacts.sort(compareNames)})
  }

  toggleContacts = () => {
    console.log(this.state.showContacts)
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  renderItem = (obj) => <Row {...(obj.item)} />

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (
          <FlatList
          renderItem={this.renderItem}
          data={this.state.contacts}
           /> 
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: 'white',
    alignItems: 'center',
  }
});



