/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import TimeAgo from 'javascript-time-ago'

// import en from 'javascript-time-ago/locale/en.json'
// import ru from 'javascript-time-ago/locale/ru.json'

// TimeAgo.addDefaultLocale(en)
// TimeAgo.addLocale(ru)

AppRegistry.registerComponent(appName, () => App);
