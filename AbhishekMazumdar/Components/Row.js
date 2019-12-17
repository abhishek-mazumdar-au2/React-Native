import React from 'react';
import {View , Text ,  StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 22
    },
    textDiv: {
        alignItems: 'center',
        marginTop: 40,
        opacity: 0.95
    }
})

const Row = props => (
    <View  style={styles.textDiv}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{props.phone}</Text>
    </View>
)

export default Row;