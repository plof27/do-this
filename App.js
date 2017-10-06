import React from 'react';
import { Container, Header, Content } from 'native-base';
import AppFooter from './components/AppFooter';
import { Font, AppLoading } from 'expo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentPage: 'list',
    };
  }

  async _loadResourcesAsync() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={ this._loadResourcesAsync }
          onFinish={ () => this.setState({loading: false}) }
          onError={ console.warn } // I have a vague idea of what this does...
        />
      );
    }

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
