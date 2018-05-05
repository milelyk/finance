/* @flow */

import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import AddSymbolForm from './AddSymbolForm';
import Navbar from './Navbar';
import Overview from './Overview';
import Performance from './Performance';
import Transactions from './Transactions';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Router>
        <div>
          {/* Wrap the `Navbar` in a pathless route to ensure it is always rendered and always
              updates on navigation. Updates are blocked because internally the `Navbar` is wrapped
              by react-redux's `connect`.

              See: React Router's ["Dealing With Update Blocking"][0] */}
          <Route component={Navbar} />
          <Container>
            <Route exact path="/" component={Overview} />
            <Route path="/performance" component={Performance} />
            <Route path="/transactions" component={Transactions} />
            <Row>
              <Col md="6" style={{ marginBottom: '20px', marginTop: '20px' }}>
                <AddSymbolForm />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

// [0]: https://github.com/ReactTraining/react-router/blob/4b61484ec9eea4bc3a2eb36028c47934414542ae/packages/react-router/docs/guides/blocked-updates.md
