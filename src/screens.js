import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';


export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default,Provider);
  Navigation.registerComponent('Screen2', () => require('./Screen2').default);
  Navigation.registerComponent('Search', () => require('./Search').default);

}
