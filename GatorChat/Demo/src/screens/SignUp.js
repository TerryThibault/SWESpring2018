import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, Icon, Left, ListItem,Title,Body, CheckBox, Label, Right} from 'native-base'
import ModalDropdown from 'react-native-modal-dropdown';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null
  }/*
  constructor(props) {
    super(props)
    this.state = {
      TextUFLEmail: '',
      TextPass1: '',
      TextPass2: '',
      TextAge: '',
      check: false,
      TextGender: ''
    }
  }
  InsertDataToServer = () =>{
 const { TextUFLEmail }  = this.state ;
 const { TextPass1 }  = this.state ;
 const { TextPass2 }  = this.state ;
 const { TextAge }  = this.state ;
 const { TextGender} = this.state;
fetch('https://reactnativecode.000webhostapp.com/submit_user_info.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: TextUFLEmail,
    password1: TextPass1,
    password2: TextPass2,
    age: TextAge,
    gender: TextGender
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
             <Icon name="arrow-back" />
           </Button>
         </Left>
         <Body>
         <Title style = {{color: 'green', fontSize: 30, fontWeight: 'bold'}}>Sign Up</Title>
         </Body>
         <Right/>
     </Header>
     <Content>
      <Form>
        <Item>
          <Label style = {{color: 'orange'}}>UFL EMAIL</Label>
          <Input /*onChangeText={TextUFLEmail => this.setState({TextUFLEmail})}*//>
        </Item>
        <Item inlineLabel>
          <Label style = {{color: 'orange'}}>PASSWORD</Label>
          <Input /*onChangeText={TextPass1 => this.setState({TextPass1})}*//>
        </Item>
        <Item inlineLabel>
          <Label style = {{color: 'orange'}}>CONFIRM PASSWORD</Label>
          <Input /*onChangeText={TextPass2 => this.setState({TextPass2})}*//>
        </Item>
        <Item>
          <ModalDropdown  options={['MALE', 'FEMALE', 'OTHER', 'PREFER NOT TO ANSWER']}
                          dropdownTextStyle={{color: 'orange'}}
                          textStyle={{color: 'orange', fontSize: 20, fontWeight: '300', height: 50}}
                        /*  onSelect={(idx, value) => this._dropdown_onSelect(idx, value)}*/
          />
        </Item>
        <Item inlineLabel>
          <Label style = {{color: 'orange'}}>AGE</Label>
          <Input /*onChangeText={TextAge => this.setState({TextAge})}*//>
        </Item>
        <Item stackedLabel style = {{height: 250}}>
        //Terms and conditions
          <Label style = {{color: 'orange'}}>GATOTCHAT TERMS OF SERVICE</Label>
          <ScrollView>
            <Text style = {{color: 'orange'}}>
            Who:  GatorChat is maintained by GatorChat, LLC(“GC”).   At times GC
            may also be referred to as “we”, “us”, or “GaorChat”.  The person who
            is viewing or interacting this site we will refer to as “you”, “hey you”,
            or where appropriate “jerkface” (only if you’re being bad). Why: This Terms
             of Service Agreement (“Agreement”) is our contract with you, and tells you
              what you can and can’t do and what we can and can’t do with you. What: GC
              is a bad ass mobile app that lets lonely people connect with eachother.
              It lets these people(not us of course), who have no lives, both videochat
              and text each other.  We make $$$$$ by: (1) telling people about some of
              thing you have told us about yourself (if you have given us permission);
              (2) telling you about people that have paid us to talk about them; and (3)
               selling advertising space.  If you’re buying from us, you will PAY for what
                you order when you order it.  Since we wear the pants around here, its up
                 to us whether we’ll run your ad or not, and like your prom date we may
                  reject you…so try again.
            </Text>
          </ScrollView>
        </Item>
        <ListItem>
          <CheckBox value = {false} /*onChange={()=>this.setSetState({check:!this.state.check})}*//>
            <Body>
              <Text style = {{color: 'orange'}}>I AGREE TO THE TERMS AND CONDITIONS</Text>
            </Body>
        </ListItem>
        <Item last>
          <Left/>
          <Body>
          <Button style = {{backgroundColor: 'green'}}
          //  if(this.state.check){
              /*onPress={() => this.props.navigate('ChatScreen')}*/
          //  }
              >
            <Text style = {{color: 'orange', fontSize: 30}}>Sign Up</Text>
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
/*
_dropdown_onSelect(idx, value) {
    this.setState({TextGender: value})};
  }
*/
