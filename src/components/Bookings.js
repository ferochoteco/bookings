import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, SectionList, TouchableHighlight } from 'react-native';
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

    renderItem({ item, index, section }) {
        const startDate = getFormattedDate(item.startDateTime.value);
        const endDate = getFormattedDate(item.endDateTime.value);
        return (
                item.title === "Available" &&
                    <TouchableHighlight
                        style={styles.listItem}
                        underlayColor={'#673AB7'}
                        onPress={() => this.handleOnPress()}>
                        <View>
                            <Text>{ startDate.time } - { endDate.time }</Text>
                        </View>
                    </TouchableHighlight>
            )
    }

    componentDidMount() {
        const { benefit } = this.props;
        this.props.getBookings(benefit.calendarId);
    }

    handleOnPress = () => {
        alert("Turno reservado");
    }

    bookingsAvailable = (bookings) => {
        return bookings.filter(booking => booking.title === "Available").length > 0;
    }

    groupByDate(bookings) {
        const result = bookings.reduce(function (r, a) {
                            const date = a.start.slice(0,10);
                            if (!r[date]) {
                                r[date] = [];
                            }
                            r[date].push(a);
                            return r;
                        }, {});
        let keys = Object.keys(result);
        let sectionsData = [];
        keys.map(element => {
            sectionsData.push(
                {
                    "title": element,
                    "data": result[element]
                }
            )
        });
        return sectionsData;
    }

    render() {
        const { loading, bookings } = this.props;
        const sectionData = this.groupByDate(bookings);
        return (
            <View style={styles.container}>
                { loading ? <Loading isLoading={loading} /> :
                    this.bookingsAvailable(bookings) ?
                        sectionData && 
                            <View>
                                <StatusBar barStyle="light-content" />
                                {/* <FlatList 
                                    data={bookings} 
                                    keyExtractor={item => item.id} 
                                    renderItem={ this.renderItem } /> */}
                                <SectionList
                                    renderItem={ this.renderItem }
                                    renderSectionHeader={({section: {title}}) => (
                                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                                    )}
                                    sections={sectionData}
                                    keyExtractor={(item, index) => item.id + index}
                                    />
                            </View> 
                    :
                        <Text>No available benefits</Text>
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