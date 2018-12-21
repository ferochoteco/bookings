import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';
import Sites from '../components/Sites';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        {alert("asdasd")}
        <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('../assets/images/logo.png')} 
                />
            <Text style={styles.title}>Globant Bookings</Text>
        </View>
        <View style={styles.formContainer}>
            <Sites />
        </View>
    </View>
);

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
    title: 'Home',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF44'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        margin: 12,
        width: 260,
        textAlign: 'center',
        opacity: 0.9
    }
});

export default HomeScreen;