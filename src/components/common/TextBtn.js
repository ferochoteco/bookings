import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const TextBtn = (props) => {
    return (
        <TouchableOpacity 
            style={{...styles.buttonContainer, backgroundColor: props.bkgColor}}
            onPress={props.onPress}>
            <Text style={{...styles.buttonText, color: props.color}}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700'
    }
});

export default TextBtn;
