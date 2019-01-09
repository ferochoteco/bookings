import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, SectionList, TouchableHighlight } from 'react-native';
import Loading from './common/Loading';
import { Icon } from 'react-native-elements';
import { getFormattedDate } from '../utils/formatDate';
// Redux
import { connect } from 'react-redux';
import { getBookingsAction } from '../actions/bookingsActions';
import { ScrollView } from 'react-native-gesture-handler';

class Bookings extends Component {
    
    constructor() {
        super();
        this.bookingsAvailable = this.bookingsAvailable.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }

    renderItem({ item, index, section }) {
        if (item.title === "Occupied" && item.mine === false) 
            return null;
        const iconName = item.mine ? 'calendar-times-o' : 'calendar-check-o';
        const color = item.mine ? 'red' : '#27ae60';
        const startDate = getFormattedDate(item.startDateTime.value);
        const endDate = getFormattedDate(item.endDateTime.value);
        return (
                (item.title === "Available" || (item.title === "Occupied" && item.mine === true))  &&
                    <TouchableHighlight
                        style={styles.listItem}
                        underlayColor={'#673AB7'}
                        onPress={() => this.handleOnPress()}>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.time}>{ startDate.time } - { endDate.time }</Text>
                            <Icon onPress={() => alert("Turno reservado")} containerStyle={{flex: 1, alignItems: 'flex-end'}} name={iconName} type="font-awesome" color={color} />
                            <Icon onPress={() => alert("Info")} containerStyle={{flex: 1, paddingTop: 3, alignItems: 'flex-end'}} name="info" type="feather" color='#2980b9' />
                        </View>
                    </TouchableHighlight>
            )
    }

    renderSectionHeader({ section: { title } }) {
        let date = new Date(title);
        date = String(date).split(" ");
        const day = date[0];
        const month = date[1];
        const number = date[2];
        return <Text style={styles.sectionTitle}>{day} {number}, {month}</Text>
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
        const { loading, bookings, benefit } = this.props;
        const sectionData = this.groupByDate(bookings);
        return (
            <View style={styles.container}>
                { loading ? <Loading isLoading={loading} /> :
                    this.bookingsAvailable(bookings) ?
                        sectionData && 
                            <ScrollView>
                                <StatusBar barStyle="light-content" />
                                <Text style={styles.title}>{benefit.name}</Text>
                                <SectionList
                                    contentContainerStyle={styles.listContainer}
                                    renderItem={ this.renderItem }
                                    renderSectionHeader={ this.renderSectionHeader }
                                    sections={sectionData}
                                    keyExtractor={(item, index) => item.id + index}
                                    />
                            </ScrollView> 
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
    title: {
        marginBottom: 10,
        paddingLeft: 10,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    },
    listItem: {
        padding: 10
    },
    sectionTitle: {
        height: 20,
        margin: 10,
        backgroundColor: '#673AB7',
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        borderRadius: 5
    },
    time: {
        flex: 8,
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