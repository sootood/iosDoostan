import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';

 const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

export function registerScreens() {
  Navigation.registerComponentWithRedux('Home', () => require('./Home').default,Provider,store);
  Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  Navigation.registerComponentWithRedux('SignUp', () => require('./SignUp').default,Provider,store);
  Navigation.registerComponent('Screen2', () => require('./Screen2').default);
  Navigation.registerComponent('Search', () => require('./Search').default);
  Navigation.registerComponentWithRedux('Agancy', () => require('./CreateAgancy').default,Provider,store);

}
