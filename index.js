/**
 * @format
 */

import {AppRegistry} from 'react-native';

import { navigation } from './navigation/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navigation);
