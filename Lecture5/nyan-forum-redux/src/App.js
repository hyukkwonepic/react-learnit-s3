import React, { Component } from 'react';
import { GlobalStyle } from './global-styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import Landing from './views/Landing';
import PostList from './views/PostList';
import PostDetail from './views/PostDetail';
import PostCreate from './views/PostCreate';
import CommentCreate from './views/CommentCreate';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/create" component={PostCreate} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/posts/:id/create" component={CommentCreate} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
