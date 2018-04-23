import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    var x = document.geElementById('username').value
    var y = document.geElementById('password').value
    fetch('localhost:3000/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
      },
  body: JSON.stringify({
    username: x, //take from placeholder textinput, put in here
    password: y, //need a way to pass in values
    /*
    IF USERNAME AND PASSWORD MATCH DATABASE
      GO TO VIDEO CHAT SCREEN
    IF DOES NOT MATCH UP
      PROMPT USER TO RE ENTER (I'LL ADD THIS IN)
    IF NEW USER BUTTON IS CLICKED
      GO TO SIGN UP PAGE
    IF FORGOT PASSWORD BUTTON IS CLICKED
      GO TO RESET PASSWORD PAGE
    */
      }),
    }) 
    .then(function(data){alert(JSON.stringify( data ))})
  }
  render() {
    return (

      <View style={styles.container}>
        <Text> </Text>
        <Text> </Text>
        <Text style = {styles.header}>GATORCHAT</Text>
        <Image
          style={{width: 275, height:275}}
          source={{uri: 'https://i.imgur.com/391Jrm4.png'}}
          />
    
     <TextInput
        style={{fontSize: 24, fontFamily: 'sans-serif-thin', height: 40, width: 250, color: 'orange', borderBottomColor: 'orange', borderBottomWidth: 3}}
        underlineColorAndroid={'transparent'}
        placeholder = 'USERNAME'
        id = 'username'
        placeholderTextColor = 'orange'
     />
      
     <TextInput
        style={{fontSize: 24, fontFamily: 'sans-serif-thin', height: 40, width: 250, color: 'orange', borderBottomColor: 'orange', borderBottomWidth: 3, marginBottom: 5}}
        underlineColorAndroid={'transparent'}
        secureTextEntry = {true}
        placeholder = 'PASSWORD'
        id = 'password'
        placeholderTextColor = 'orange'
     />

     <Button
        onPress={this._onPressButton}
        //marginBottom = '10'
        title = "LOGIN"
        color = 'orange'
        
      />
      <Text> </Text>
     <Button
        onPress={this._onPressButton}
        title = "NEW USER? SIGN UP HERE!"
        color = 'blue'
      />
      <Text> </Text>
     <Button
        onPress={this._onPressButton}
        title = "FORGOT PASSWORD?"
        color = 'blue'
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
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 50,
    fontFamily: 'notoserif',
    color: 'green',
  },
});
