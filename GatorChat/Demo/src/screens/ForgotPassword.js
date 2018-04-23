import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    /*
    IF RESET PASSWORD IS CLICKED && EMAIL IS VALID
      SEND THE EMAIL A NEW PASSWORD
    */
  }
  render() {
    return (

      <View style={styles.container}>
        <Text> </Text>
        <Text> </Text>
        <Text style = {styles.header}>RESET PASSWORD</Text>

     <TextInput
        style={{fontSize: 24, fontFamily: 'sans-serif-thin', height: 40, width: 250, color: 'orange', borderBottomColor: 'orange', borderBottomWidth: 3}}
        underlineColorAndroid={'transparent'}
        placeholder = 'ENTER EMAIL'
        placeholderTextColor = 'orange'
     />

     <Button
        onPress={this._onPressButton}
        //marginBottom = '10'
        title = "RESET PASSWORD"
        color = 'orange'

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
