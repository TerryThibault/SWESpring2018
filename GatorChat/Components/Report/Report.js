import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, Icon, Label, ListItem} from 'native-base'
class Report extends Component {
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
            <Title>Report</Title>
          </Body>
        </Header>
              <Content>
                <Form>
                <ListItem>
                  <CheckBox checked={false} />
                    <Body>
                      <Text>SEXUAL HARASSMENT</Text>
                    </Body>
                </ListItem>
                <ListItem>
                  <CheckBox checked={false} />
                    <Body>
                      <Text>THREATS</Text>
                    </Body>
                </ListItem>
                <ListItem>
                  <CheckBox checked={false} />
                    <Body>
                      <Text>ILLEGAL ACTIVITY</Text>
                    </Body>
                </ListItem>
                <ListItem>
                  <CheckBox checked={false} />
                    <Body>
                      <Text>SOLICITING DRUGS</Text>
                    </Body>
                </ListItem>
                  <ListItem>
                    <CheckBox checked={false} />
                      <Body>
                        <Text>STALKING</Text>
                      </Body>
                  </ListItem>
                  <ListItem>
                    <CheckBox checked={false} />
                      <Body>
                        <Text>OTHER</Text>
                      </Body>
                  </ListItem>
                  <Item stackedLabel>
                    <Label>PLEASE PROVIDE A DESCRIPTION BELOW</Label>
                    <Input />
                  </Item>
                  <Button
                        block = {true}
                        onPress = { => this.props.navigation.navigate('Chat')}
                    >
                      <Text style = ({ color : 'red' })> Submit </Text>
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
