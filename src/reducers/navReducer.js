import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../components/AppNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(
  tempNavState
);

const NavReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Login':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}


export default NavReducer;