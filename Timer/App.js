import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// class Count extends React.Component {
//   shouldComponentUpdate() {
//     console.log('updating...')
//     return true
//   }
//   render() {
// return (
//       <Text style={styles.paragraph}>{this.props.count}</Text>
//     )
//   }
// } 

// styles.....

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#333',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  button: {
    paddingTop: Constants.statusBarHeight
  }
});


class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  // function to increment the count
 inc = () => {
   console.log('Incrementing!')
   this.setState(prevState => ({
     count: prevState.count + 1
   }))
 }

 // using the componentDidMount
 componentDidMount() {
   console.log('compenentDidMount running...')
   this.interval = setInterval(this.inc, 1000)
 }

 // clear off the state
 componentWillUnmount(){
   console.log('break incrementing')
   clearInterval(this.interval)
 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.state.count}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: true,
    }
  }

  // function to toggle the counter
  toggleCounter = () => {
    this.setState(prevState => ({
    showCounter: !prevState.showCounter
  }))
  }
    render(){
      if(this.state.showCounter){
        return (
      <View style={styles.container}>
      <Button onPress={this.toggleCounter} style={styles.button} title='Toggle' />
        <Counter />
      </View>
    )
      } else {
        return (
      <View style={styles.container}>
      <Button onPress={this.toggleCounter} style={styles.button} title='Toggle' />
      </View>
    )
      }
  }
  }