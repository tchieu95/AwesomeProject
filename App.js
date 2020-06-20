/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer, StackActions, NavigationActions} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu' + 'ios ne',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component<{}> {

  render() {
    return(
      <button title="Go to Jane's profile"
      />
    );
  }
}

class ProfileScreen extends React.Component<{}> {

  render() {
    return(
      <button title="Go to Jane's profile"
      />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
},
{
  initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(MainNavigator);

type Props = {};
export default class App extends Component<{}> {
  render() {
    return <button title="Go to Jane's profile"
    onClick ={() => {}}
    ></button>
    // return <Text style={styles.descriptions}>Search for houses to buy!</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  descriptions: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 65,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
