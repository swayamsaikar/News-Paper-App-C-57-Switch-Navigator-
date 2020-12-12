import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/AppHeader';

export default class WeatherScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={{ margin: 15 }}>
          <Text
            style={{
              textAlign: 'center',
              backgroundColor: this.props.navigation.getParam('color'),
              padding: 20,
              marginTop: 250,
              borderRadius: 15,
            }}>
            Welcome To The Weather Screen
          </Text>
        </View>
      </View>
    );
  }
}
