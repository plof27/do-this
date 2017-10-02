import React from 'react';
import { Font } from 'expo';

class App extends React.Component {
  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return(
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
  }
}

export default App;
