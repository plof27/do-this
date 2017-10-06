import React from 'react';
import { Button, Text, Icon } from 'native-base';
import { Header, Left, Body, Right, Title } from 'native-base';
import Styles from '../../global-styles';

const AppHeader = (props) => (
  <Header style={ Styles.header }>
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
);
export default AppHeader;
