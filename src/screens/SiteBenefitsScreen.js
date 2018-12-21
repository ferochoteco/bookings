import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Benefits from '../components/Benefits';

const SiteBenefitsScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Benefits navigation={ navigation } />
    </View>
);

SiteBenefitsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

SiteBenefitsScreen.navigationOptions = {
    title: 'Benefits',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    title: {
        color: '#FFF',
        margin: 12,
        width: 260,
        textAlign: 'center',
        opacity: 0.9
    }
});

export default SiteBenefitsScreen;