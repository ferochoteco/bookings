import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, TouchableHighlight } from 'react-native';
import Loading from './common/Loading';
import { getFormattedDate } from '../utils/formatDate';
// Redux
import { connect } from 'react-redux';
import { getBookingsAction } from '../actions/bookingsActions';

class Bookings extends Component {
    
    constructor() {
        super();
        this.bookingsAvailable = this.bookingsAvailable.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({ item }) {
        const startDate = getFormattedDate(item.startDateTime.value);
        const endDate = getFormattedDate(item.endDateTime.value);
        return (
                item.title === "Available" &&
                    <TouchableHighlight
                        style={styles.listItem}
                        underlayColor={'green'}
                        onPress={() => this.handleOnPress()}>
                        <View>
                            <Text>State: { item.title }</Text>
                            <Text>{`Day: ${startDate.day} ${startDate.number}`}</Text>
                            <Text>Start date time: { startDate.time }</Text>
                            <Text>End date time: { endDate.time }</Text>
                        </View>
                    </TouchableHighlight>
            )
    }

    componentDidMount() {
        const { benefit } = this.props;
        this.props.getBookings(benefit.calendarId);
    }

    handleOnPress = () => {
        alert("reservar turno");
    }

    bookingsAvailable = (bookings) => {
        return bookings.filter(booking => booking.title === "Available").length > 0;
    }

    groupByDate(bookings) {
        const result = bookings.reduce(function (r, a) {
                            const date = a.start.slice(0,10);
                            r[date] = r[date] || [];
                            r[date].push(a);
                            return r;
                        }, []);
        return result;
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
                                renderItem={ this.renderItem } />
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