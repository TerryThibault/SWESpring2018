import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";
import { Container, Content, Spinner, Button, Left, Body, Right} from 'native-base'

export default class LoadingScreen extends Component {
  static navigationOptions = {
    header :null
  }
  render() {
    return (
      <Container>
        <Content>
          <View style = {{height:250}}/>
          <Spinner color='green'/>
          <View style = {{height:250}}/>
          <Left/>
          <Body>
          <Button style = {{backgroundColor: 'red'}}
          /*onPress={() => this.props.navigation.goBack()}*/>
            <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 30}}>CANCEL</Text>
          </Button>
          </Body>
          <Right/>
        </Content>
      </Container>
    );
  }
}
