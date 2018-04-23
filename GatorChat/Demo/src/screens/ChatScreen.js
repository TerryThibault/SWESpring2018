import React, { Component } from 'react';
import { AppRegistry, Header, Content, ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';


export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('TAP!')
    /*
    IF TEXT BUTTON IS PRESSED
      GO TO TEXT CHAT PAGE(?)
    IF REPORT BUTTON IS CLICKED
      GO TO REPORT PAGE
    IF NEXT BUTTON IS CLICKED
      CONNECT TO A NEW USER
    */
  }

  render() {
    return (
        <View style={styles.container2}>
            /*<Button
              onPress={this._onPressButton}
              title = 'TEXT CHAT'
              color = 'darkorange'
              //flexDirection =  'column'

            />*/
            <Image
              style = {styles.BorderClass}
              source={{uri: 'https://i.imgur.com/1w6hoPZ.png'}}
              alignItems = 'center'
           />
            <Button
              onPress={this._onPressButton}
              title = 'REPORT'
              color = 'darkred'
              //flexDirection =  'column'

            />
            <Button
              onPress={this._onPressButton}
              title = 'NEXT'
              color = 'darkblue'
              //flexDirection =  'column'
            />
        </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsteelblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    top: 20,
    height: 44,
  },
  container2: {
    flex: 1,
    backgroundColor: 'lightsteelblue',
    //alignItems: 'center',
    justifyContent: 'center',

  },
  header: {
    fontSize: 50,
    fontFamily: 'serif',
    color: 'green',
    fontWeight: 'bold',
    //fontStyle: 'italic',
  },
  button: {
    backgroundColor: 'orange',
    width: '40%',
    height: 40,
    alignItems: 'flex-start',
  },
  press: {
    width: 150,
    padding: 10,
    backgroundColor : 'yellow',
  },
  textButtons: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
  },
  BorderClass:
  {
  // Setting up image width.
  width: 360,

  // Setting up image height.
  height: 450,

  // Set border width.
  borderWidth: 5,

  // Set border color.
  borderColor: 'black',
  },
});
