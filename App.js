import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';
import Styles from './global-styles';
const App = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Text>List</Text>
        </Button>
      </Left>
      <Body>
        <Title>ANDOO LOOK</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  </Container>
);

export default App;
