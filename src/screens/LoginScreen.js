import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('../assets/images/logo.png')} 
                />
            <Text style={styles.title}>Globant Bookings</Text>
        </View>
        <View style={styles.formContainer}>
            <LoginForm />
        </View>
    </KeyboardAvoidingView>
);

LoginScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ecc71'
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

export default LoginScreen;