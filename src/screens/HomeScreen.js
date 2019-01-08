import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Sites from '../components/Sites';
import HeaderTitle from '../components/common/HeaderTitle';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Sites navigation={ navigation } />
    </View>
);

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
    headerTitle: <HeaderTitle text="Sites" iconName="location-on" />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});

export default HomeScreen;