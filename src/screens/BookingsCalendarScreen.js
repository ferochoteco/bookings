import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Bookings from '../components/Bookings';

const BookingsCalendarScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Bookings benefit={ navigation.state.params.benefitData } />
    </View>
);

BookingsCalendarScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

BookingsCalendarScreen.navigationOptions = {
    title: 'Bookings Available',
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

export default BookingsCalendarScreen;