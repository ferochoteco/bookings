import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, TouchableHighlight } from 'react-native';

class Benefits extends Component {

    handleOnPress = () => {
        alert("hola");
    }

    handleOnPress = (benefitData) => {
        const { navigation } = this.props;
        navigation.navigate('BookingsCalendar', { benefitData });
    }

    render() {
        const { siteData } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <FlatList 
                    data={siteData.benefits} 
                    keyExtractor={item => item.name} 
                    renderItem={({item}) => 
                        <TouchableHighlight
                            style={styles.listItem}
                            underlayColor={'green'}
                            onPress={() => this.handleOnPress(item)}>
                            <Text>{item.name}</Text>
                        </TouchableHighlight>}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    errorText: {
        color: '#c0392b'
    },
    listItem: {
        flex: 1,
        padding: 10
    }
});

export default Benefits;