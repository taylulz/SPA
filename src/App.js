import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Page0 from './page0';
import Page1 from './Page1';
import Page2 from './Page2';

// import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      {/* <Jumbotron> */}
        <h1 className="header">SPA</h1>
        <h2>
          
          <Switch>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/">
              <Page0 />
            </Route>
          </Switch>
        </h2>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>page0</Button>
            </LinkContainer>
            <LinkContainer to="/page1">
              <Button>page1</Button>
            </LinkContainer>
            <LinkContainer to="/page2">
              <Button>page2</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      {/* </Jumbotron> */}
    </Container>
  </MemoryRouter>
);

export default App;
