import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, TouchableHighlight } from 'react-native';
import Loading from '../components/common/Loading';

// Redux
import { connect } from 'react-redux';
import { getSitesAction } from '../actions/sitesActions';

class Sites extends Component {

    componentDidMount() {
        this.props.getSites();
    }

    handleOnPress = (siteData) => {
        const { navigation } = this.props;
        navigation.navigate('SiteBenefits', { siteData });
    }

    render() {
        const { loading, sites } = this.props;
        return (
            <View style={styles.container}>
                { loading ? <Loading isLoading={loading} /> : 
                    <View>
                        <StatusBar barStyle="light-content" />
                        <FlatList 
                            data={sites} 
                            keyExtractor={item => String(item.id)} 
                            renderItem={({item}) => 
                                <TouchableHighlight
                                    style={styles.listItem}
                                    underlayColor={'green'}
                                    onPress={() => this.handleOnPress(item)}>
                                    <Text>{item.name}</Text>
                                </TouchableHighlight>}
                            />
                    </View>
                } 
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

const mapStateToProps = (state) => {
    return {
        sites: state.sitesReducer.data,
        loading: state.sitesReducer.loading,
        error: state.sitesReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSites: () => dispatch(getSitesAction())
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Sites);