import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, Icon, Left, ListItem,Title,Body, CheckBox, Label, Right} from 'native-base'

export default class Settings extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Container style = {{backgroundColor:'lightcyan'}}>
      <Header style = {{backgroundColor:'lightcyan'}}>
         <Left>
           <Button transparent /*onPress={() => this.props.navigation.goBack()}*/>
             <Icon name="arrow-back" />
           </Button>
         </Left>
         <Body>
         <Title style = {{color: 'green', fontSize: 30, fontWeight: 'bold'}}>Settings</Title>
         </Body>
         <Right/>
     </Header>
     <Content>
      <Form>
        <Item style = {{height:50}}>
          <Left/>
          <Body>
           <Text style = {{color: 'orange', fontSize: 25, fontWeight: 'bold'}}>RECENTS</Text>
          </Body>
          <Right/>
        </Item>
        <Item>
          <Button transparent /*onPress = { => this.props.navigation.navigate('Report')}*/>
            <Text style = {{color: 'orange', fontSize: 25}}>User1</Text>
            </Button>
        </Item>
        <Item>
              <Button transparent /*onPress = { => this.props.navigation.navigate('Report')}*/>
                <Text style = {{color: 'orange', fontSize: 25}}>User2</Text>
              </Button>
            </Item>
            <Item>
              <Button transparent /*onPress = { => this.props.navigation.navigate('Report')}*/>
                <Text style = {{color: 'orange', fontSize: 25}}>User3</Text>
              </Button>
            </Item>
            <Item>
              <Button transparent /*onPress = { => this.props.navigation.navigate('Report')}*/>
                <Text style = {{color: 'orange', fontSize: 25}}>User4</Text>
              </Button>
            </Item>
            <Item>
              <Button transparent /*onPress = { => this.props.navigation.navigate('Report')}*/>
                <Text style = {{color: 'orange', fontSize: 25}}>User5</Text>
              </Button>
            </Item>
            <Item last>
              <Left/>
              <Body>
              <Button style = {{backgroundColor: 'green'}}
              /*onPress={() => this.props.navigate('LoginScreen')}*/>
                <Text style = {{color: 'orange', fontSize: 30}}>LOGOUT</Text>
              </Button>
              </Body>
              <Right/>
            </Item>
      </Form>
     </Content>
  </Container>
    );
    //lightsteelblue
  }
}
