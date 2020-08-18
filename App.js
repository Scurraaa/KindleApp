import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import homeScreen from './src/screens/homeScreen';
import readScreen from './src/screens/readScreen';

const app_navigator = createStackNavigator({
  Home: homeScreen,
  BookReader: readScreen,
})

export default createAppContainer(app_navigator);
