import React, { Component } from 'react';

import List from './components/List';
import Color from './components/Color';
import Search from './components/Search';
import Tags from './components/Tags';

class App extends Component {
  render() {
    return (
      <div>
        {/* <List /> */}
        {/* <Color /> */}
        {/* <Search /> */}
        <Tags />
      </div>
    );
  }
}

export default App;
