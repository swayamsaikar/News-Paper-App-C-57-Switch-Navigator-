import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './Screens/Home';
import HorosScopeScreen from './Screens/HoroScopeScreen';
import JokeScreen from './Screens/JokeScreen';
import NewsScreen from './Screens/NewsScreen';
import WeatherScreen from './Screens/WeatherScreen';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class Navigator extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator(
  {
    HomeScreen: HomeScreen,
    HorosScopeScreen: HorosScopeScreen,
    JokeScreen: JokeScreen,
    NewsScreen: NewsScreen,
    WeatherScreen: WeatherScreen,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const AppContainer = createAppContainer(AppNavigator);
