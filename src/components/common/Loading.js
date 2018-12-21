import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, paddings } from '../_base';

const Loading = (props) => {
    return (
        props.isLoading ? (
            <View style={styles.container}>
                <ActivityIndicator 
                    size="large"
                    color={colors.secondary} />
            </View>
        ) : false
    )
}

const styles = StyleSheet.create({
    container: {
        padding: paddings.md
    }
});

export default Loading;