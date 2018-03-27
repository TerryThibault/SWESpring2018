import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;

class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Placeholder Picker</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="GENDER"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="FEMALE" value="key0" />
              <Item label="MALE" value="key1" />
              <Item label="OTHER" value="key2" />
              <Item label="PREFER NOT TO ANSWER" value="key3" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default Gender;
