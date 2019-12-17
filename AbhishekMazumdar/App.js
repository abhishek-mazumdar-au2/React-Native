import React from 'react';
import { Button, StyleSheet, Text, View, SectionList } from 'react-native';
import Constants from 'expo-constants'

import contacts, {compareNames} from './contacts';
import Row from './Components/Row';
import ContactList from './Components/ContactsList';
import AddContactForm from './Components/AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts, 
    showForm: false
  }

  // sort function          
  sort = () => {
    this.setState(prevState => {prevState.contacts.sort(compareNames)})
  }

  toggleContacts = () => {
    console.log(this.state.showContacts)
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

// toggle contact form
toggleForm = () => {
  this.setState(prevState => ({showForm: !prevState.showForm}))
}

  render() {
    if(this.state.showForm) {
      return (
        <View style={styles.container}>
        <Button title={this.state.showContacts? ('hide contacts') : ('show contacts')} onPress={this.toggleContacts} />
        {/* <Button title="sort" onPress={this.sort} /> */}
        <Button title='back' onPress={this.toggleForm} />
        <AddContactForm />
      </View>
      )
    }
    return (
      <View style={styles.container}>
        <Button title={this.state.showContacts? ('hide contacts') : ('show contacts')} onPress={this.toggleContacts} />
        {/* <Button title="sort" onPress={this.sort} /> */}
        <Button title="ADD" onPress={this.toggleForm} />
        {this.state.showContacts && (
          <ContactList  
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



