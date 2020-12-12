import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.headerDesign}>
        <Text style={styles.buttonText}>News Paper App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerDesign: {
    backgroundColor: '#F7665E',
    padding: 15,
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }
});
