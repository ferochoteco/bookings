import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, TouchableHighlight } from 'react-native';
import Loading from './common/Loading';

// Redux
import { connect } from 'react-redux';
import { getBookingsAction } from '../actions/bookingsActions';

class Bookings extends Component {
    
    constructor() {
        super();
        this.getFormattedDate = this.getFormattedDate.bind(this);
        this.bookingsAvailable = this.bookingsAvailable.bind(this);
    }

    componentDidMount() {
        const { benefit } = this.props;
        this.props.getBookings(benefit.calendarId);
    }

    handleOnPress = () => {
        alert("reservar turno");
    }

    getFormattedDate = (dateValue) => {
        const formattedDate = new Date(dateValue);
        const time = String(formattedDate).split(" ")[4].split(":");
        return time[0] + ":" + time[1];
    }

    bookingsAvailable = (bookings) => {
        return bookings.filter(booking => booking.title === "Available").length > 0;
    }

    render() {
        const { loading, bookings, benefit } = this.props;
        return (
            <View style={styles.container}>
                { loading ? <Loading isLoading={loading} /> :
                    this.bookingsAvailable(bookings) ?
                        <View>
                            <StatusBar barStyle="light-content" />
                            <FlatList 
                                data={bookings} 
                                keyExtractor={item => item.id} 
                                renderItem={({item}) => 
                                        ( 
                                            item.title === "Available" &&
                                                <TouchableHighlight
                                                    style={styles.listItem}
                                                    underlayColor={'green'}
                                                    onPress={() => this.handleOnPress()}>
                                                    <View>
                                                        <Text>State: {item.title}</Text>
                                                        <Text>Start date time: {this.getFormattedDate(item.startDateTime.value)}</Text>
                                                        <Text>End date time: {this.getFormattedDate(item.endDateTime.value)}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                        )
                                    }
                                />
                        </View> 
                    :
                        <Text>There are no available bookings</Text>
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
    title: {
        paddingBottom: 20,
        backgroundColor: 'yellow'
    },
    listItem: {
        flex: 1,
        padding: 10
    }
});

const mapStateToProps = (state) => {
    return {
        bookings: state.bookingsReducer.data,
        loading: state.bookingsReducer.loading,
        error: state.bookingsReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBookings: (calendarId) => dispatch(getBookingsAction(calendarId))
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Bookings);