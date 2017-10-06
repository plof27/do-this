import React from 'react';
import { Container } from 'native-base';
import { Content } from 'native-base';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
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
        <AppHeader />
        <Content />
        <AppFooter />
      </Container>
    );
  }
}

export default App;
