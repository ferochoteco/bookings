import { createStackNavigator, createAppContainer } from 'react-navigation';
import Routes from '../config/routes';

const navOpts = {
    initialRouteName: 'Home'
    // navigationOptions: {
    //     headerStyle: {
    //         backgroundColor: colors.primary
    //     },
    //     headerTintColor: colors.normalText,
    //     headerTitleStyle: {
    //         fontWeight: 'bold'
    //     }
    // }
}

const RootNavigator = createStackNavigator(Routes, navOpts);

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;

