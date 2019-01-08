import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

const HeaderTitle = ({ text, iconName }) =>  (
    <View style={styles.container}>
        <Icon name={ iconName } color='#FFF' />
        <Text style={styles.text}>{ text }</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 20
    },
    text: {
        color: '#FFF',
        padding: 12,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default HeaderTitle;