/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import _NavigationService from './src/common/NavigationService';
// export const NavigationService = _NavigationService;

AppRegistry.registerComponent(appName, () => App);

