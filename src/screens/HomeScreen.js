import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Sites from '../components/Sites';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <Sites navigation={ navigation } />
        </View>
    </View>
);

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
    title: 'Sites',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
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