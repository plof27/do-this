import React from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';

const AppFooter = (props) => (
  <Footer>
    <FooterTab>
      <Button vertical>
        <Icon name="list" />
        <Text>List</Text>
      </Button>
      <Button vertical>
        <Icon name="create" />
        <Text>New</Text>
      </Button>
      <Button vertical>
        <Icon name="cog" />
        <Text>Settings</Text>
      </Button>
    </FooterTab>
  </Footer>
);

export default AppFooter;
