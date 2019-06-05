import React from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react"

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1">React Flash Cards</Header>
      </Container>
    );
  }
}

export default App;