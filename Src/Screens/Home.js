import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import Icon from 'react-native-vector-icons/AntDesign';
import db from '../../config';

/*
Comments
1.wrapped all the components inside the backgrounds
2.create the header
3.created Buttons to navigate through different screens
4.created the rating buttons dynamic by giving them their states
5.Integrated my app to the firebase database
*/


export default class HomeScreen extends React.Component {
  state = {
    likeColor: 'black',
    dislikeColor: 'black',
    // inactive: false,
    text: 'Ratings',
    likeCount: 1,
    dislikeCount: 1,
  };

  islikePressed = () => {
    var data = db.ref('ratings/');
    data.update({
      likes: this.state.likeCount,
    });
  };
  render() {
    return (
      <ImageBackground source={require('../../back.png')} style={{ flex: 1 }}>
        <AppHeader />
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            style={[styles.TouchableButton, { backgroundColor: 'purple' }]}
            onPress={() => {
              this.props.navigation.navigate('JokeScreen', { color: 'purple' });
            }}>
            <Text style={styles.TouchableText}>Read A Joke</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.TouchableButton, { backgroundColor: 'green' }]}
            onPress={() => {
              this.props.navigation.navigate('HorosScopeScreen', {
                color: 'green',
              });
            }}>
            <Text style={styles.TouchableText}>HoroScope</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.TouchableButton, { backgroundColor: 'blue' }]}
            onPress={() => {
              this.props.navigation.navigate('WeatherScreen', {
                color: 'blue',
              });
            }}>
            <Text style={styles.TouchableText}>Weather</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.TouchableButton, { backgroundColor: 'yellow' }]}
            onPress={() => {
              this.props.navigation.navigate('NewsScreen', { color: 'yellow' });
            }}>
            <Text style={styles.TouchableText}>Top News</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 19,
            marginTop: 13,
          }}>
          {this.state.text}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 21,
          }}>
          <TouchableOpacity
            style={{ marginLeft: 20 }}
            // disabled={this.state.inactive}
            onPress={() => {
              this.setState({
                likeColor: 'dodgerblue',
                // inactive: true,
                text: 'Thanks for feedback',
                likeCount: this.state.likeCount + 1,
              });
              console.log(this.state.likeCount)
              this.islikePressed()
            }}>
            <Icon name="like1" size={40} color={this.state.likeColor} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginLeft: 50,
            }}
            // disabled={this.state.inactive}
            onPress={() => {
              this.setState({
                dislikeColor: 'red',
                text: 'Okay,thanks for Feedback',
                // inactive: true,
                dislikeCount: this.state.dislikeCount + 2,
              });
              db.ref('ratings/').update({
                dislikes:this.state.dislikeCount
              })
            }}>
            <Icon name="dislike1" size={40} color={this.state.dislikeColor} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  TouchableButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 20,
    borderRadius: 15,
  },
  TouchableText: {
    fontWeight: 'bold',
  },
});
