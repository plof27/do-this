import React from 'react';
import { Container, Header, Content } from 'native-base';
import AppFooter from './components/AppFooter';
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
        <AppFooter />
      </Container>
    );
  }
}

export default App;
