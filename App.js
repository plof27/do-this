import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

const App = () => (
  <Container>
    <Header />
    <Content />
    <Footer>
      <FooterTab>
        <Button vertical>
          <Text>List</Text>
        </Button>
        <Button vertical>
          <Text>New</Text>
        </Button>
        <Button vertical>
          <Text>Settings</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

export default App;
