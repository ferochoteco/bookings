import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import HeaderTitle from '../components/common/HeaderTitle';

const ReservationsScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>My reservations</Text>
    </View>
);

ReservationsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

ReservationsScreen.navigationOptions = {
    headerTitle: <HeaderTitle text="My reservations" iconName="access-alarm" />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});

export default ReservationsScreen;