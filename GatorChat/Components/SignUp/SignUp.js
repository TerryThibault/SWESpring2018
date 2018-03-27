import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, Icon, Left, ListItem} from 'native-base'
import Gender from "./Gender"

class SignUp extends Component {
  static navigationOptions = {
    header :null
  }
  render() {
    return {
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
            <Title>Sign Up</Title>
          </Body>
        </Header>
              <Content>
                <Form>
                  <Item inlineLabel>
                    <Label>UFL EMAIL</Label>
                    <Input />
                  </Item>
                  <Item inlineLabel>
                    <Label>PASSWORD</Label>
                    <Input />
                  </Item>
                  <Item inlineLabel>
                    <Label>CONFIRM PASSWORD</Label>
                    <Input />
                  </Item>
                  //Gender Dropdown List
                  <Gender/>
                  <Item inlineLabel>
                    <Label>AGE</Label>
                    <Input />
                  </Item>
                  <Item disbaled last>
                    //Terms and conditions
                    <Input disabled placeholder='Terms and Conditions'/>
                  </Item>
                  <ListItem>
                    <CheckBox checked={false} />
                      <Body>
                        <Text>I AGREE TO THE TERMS AND CONDITIONS</Text>
                      </Body>
                  </ListItem>
                  <Button
                        block = {true}
                        onPress = { => this.props.navigation.navigate('Chat')}
                    >
                      <Text style = ({ color : 'green' })> Submit </Text>
                    </Button>
                </Form>
              </Content>
            </Container>
    };
  }
}

const styles = StyleSheet.create(){
  signUpView: {
    flex: 1,
    justify content: 'flex-end'
  }
}

export default SignUp;
