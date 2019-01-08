import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { MainRoutes, ReservationsRoutes } from '../config/routes';
import { Icon } from 'react-native-elements';

const mainOpts = {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#673AB7'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
}

const reservationsOpts = {
    initialRouteName: 'Reservations',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#673AB7'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
}

const RootNavigator = createStackNavigator(MainRoutes, mainOpts);

const BookingsNavigator = createStackNavigator(ReservationsRoutes, reservationsOpts);

const AppContainer = createAppContainer(createBottomTabNavigator(
    {
        Home: { 
            screen: RootNavigator,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => <Icon name='calendar' type='font-awesome' color={tintColor} />
            }
        },
        Reservations: { 
            screen: BookingsNavigator,
            navigationOptions: {
                tabBarLabel: 'My reservations',
                tabBarIcon: ({ tintColor }) => <Icon name='bell' type='font-awesome' color={tintColor} />
            }
        }
    },
    {
        order: ['Home', 'Reservations'],
        tabBarOptions : {
            activeTintColor: 'gold',
            inactiveTintColor: '#FFF',
            style: {
                backgroundColor: '#673AB7',
            },
            iconStyle: {
                borderRadius: 50
            },
            labelStyle: {
                fontWeight: 'bold'
            },
            showLabel: false,
            // activeBackgroundColor: '#9C27B0',
            // inactiveBackgroundColor: '#673AB7'
        }
    }
));

export default AppContainer;