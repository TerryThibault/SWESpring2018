import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

import HomeScreen from './Components/Home/HomeScreen'
import SignUp from './Components/Sign/SignUp'

const App = StackNavigator({
  //HomeScreen
  HomeScreen: { screen : HomeScreen},
  //SignUp screens
  SignUp: { screen : SignUp},
  //Report screen
  Report: {screen : Report},
  //Forgot PassWord screens
  ForgotPass: {screen: ForgotPass},
  //Videochat screen
  Chat: {screen: Chat}
})


export default App
