import React from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'white',
        borderWidth: 1
    },
})

export default class AddContactForm extends React.Component {
    static propTypes = {
        adddContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: ''
    }

    handleChangeName = (name) => {
        this.setState({name})
    }

    handleChangePhone = (phone) => {
        this.setState({phone})
    }

    render(){
        return (
            <View 
            style={{paddingTop: 300}}
            >
                <TextInput 
                style={styles.input} 
                onChangeText={this.handleChangeName} 
                value={this.state.name}
                />
                <TextInput 
                style={styles.input} 
                onChangeText={this.handleChangePhone}
                value={this.state.phone}
                keyboardType='numeric'
                />
                <Button title='AddContact' />
            </View>
        )
    }
}