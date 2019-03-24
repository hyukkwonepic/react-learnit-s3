import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Landing from './views/Landing';
import Chat from './views/Chat';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    );
  }
}

export default App;
