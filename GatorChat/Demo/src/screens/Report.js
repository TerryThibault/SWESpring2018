import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, Icon, Left, ListItem, Title, Body, CheckBox, Label, Right} from 'native-base'

export default class Report extends Component {
  static navigationOptions = {
    header :null
  }/*
  constructor(props) {
    super(props)
    this.state = {
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
      TextExp: ''
    }
  }
  InsertDataToServer = () =>{
 const { check1 }  = this.state ;
 const { check2 }  = this.state ;
 const { check3 }  = this.state ;
 const { check4 }  = this.state ;
 const { check5 } = this.state;
 const { check6 } = this.state;
 const { TextExp } = this.state;
fetch('https://reactnativecode.000webhostapp.com/submit_user_info.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    sexual harassment: check1,
    threats: check2,
    illegal activity: check3,
    soliciting drugs: check4,
    stalking: check5,
    other: check,
    explanaition: TextExp
  })
}).then((response) => response.json())
      .then((responseJson) => {
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }*/
  render() {
    return (
      <Container style = {{backgroundColor:'lightcyan'}}>
        <Header style = {{backgroundColor:'lightcyan'}}>
        <Left>
          <Button transparent /*onPress={() => this.props.navigation.goBack()}*/>
            <Icon name= 'arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title style = {{color: 'red', fontSize: 30, fontWeight: 'bold'}}>Report</Title>
        </Body>
        <Right>
          <Button transparent /*onPress = { => this.props.navigation.navigate('Settings')}*/>
            <Icon name= 'cog' active = 'false' style ={{color: 'lightgray'}} />
          </Button>
        </Right>
        </Header>
        <Content>
          <Form style = {{backgroundColor: 'lightpink'}}>
          <ListItem>
            <CheckBox value = {false} /*onChange={()=>this.setSetState({check1:!this.state.check})}*//>
            <Body>
              <Text style = {{color: 'red'}}> SEXUAL HARASSMENT</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox value = {false} /*onChange={()=>this.setSetState({check2:!this.state.check})}*//>
            <Body>
              <Text style = {{color: 'red'}}> THREATS</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox value = {false} /*onChange={()=>this.setSetState({check3:!this.state.check})}*//>
            <Body>
              <Text style = {{color: 'red'}}> ILLEGAL ACTIVITY</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox value = {false} /*onChange={()=>this.setSetState({check4:!this.state.check})}*//>
            <Body>
              <Text style = {{color: 'red'}}> SOLICITING DRUGS</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox value = {false} /*onChange={()=>this.setSetState({check5:!this.state.check})}*//>
              <Body>
                <Text style = {{color: 'red'}}> STALKING</Text>
              </Body>
          </ListItem>
          <ListItem>
            <CheckBox value = {false} /*onChange={()=>this.setSetState({check6:!this.state.check})}*//>
            <Body>
              <Text style = {{color: 'red'}}> OTHER</Text>
            </Body>
          </ListItem>
          <Item stackedLabel style = {{height: 275}}>
            <Label style = {{color: 'red'}}>PLEASE PROVIDE A DESCRIPTION BELOW</Label>
            <Input multiline = 'true'
            /*onChangeText={TextExp => this.setState({TextExp})}*//>
          </Item>
          <Item last style = {{height:50}}>
            <Left/>
            <Body>
              <Button  style = {{backgroundColor: 'red'}}
                /*onPress = { => this.props.navigation.navigate('ChatScreen')}*/>
                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 30}}>Report</Text>
              </Button>
            </Body>
            <Right/>
          </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
