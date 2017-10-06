import React, { PropTypes } from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';

const AppFooter = (props) => (
  <Footer>
    <FooterTab>
      <Button vertical onPress={ props.onPress('list') }>
        <Icon name="list" />
        <Text>List</Text>
      </Button>
      <Button vertical onPress={ props.onPress('create') }>
        <Icon name="create" />
        <Text>New</Text>
      </Button>
      <Button vertical onPress={ props.onPress('settings') }>
        <Icon name="cog" />
        <Text>Settings</Text>
      </Button>
    </FooterTab>
  </Footer>
);

AppFooter.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AppFooter;
