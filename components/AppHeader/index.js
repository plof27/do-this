import React, { PropTypes } from 'react';
import { Button, Text, Icon } from 'native-base';
import { Header, Left, Body, Right, Title } from 'native-base';
import Styles from '../../global-styles';

const AppHeader = (props) => (
  <Header style={ Styles.header }>
    <Left style={ Styles.left }>
      <Button transparent>
        <Text>List</Text>
      </Button>
    </Left>
    <Body style={ Styles.body }>
      <Title>{props.pageTitle || 'Do This'}</Title>
    </Body>
    <Right style={ Styles.right }>
      <Button transparent>
        <Icon name="menu" />
      </Button>
    </Right>
  </Header>
);

AppHeader.propTypes = {
  pageTitle: PropTypes.string,
}

export default AppHeader;
