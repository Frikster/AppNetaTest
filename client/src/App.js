import React, { Component } from 'react';
import './App.css';

import SearchComponent from './search/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AppNeta</h1>
        </header>
        <SearchComponent/>
      </div>
    );
  }
}

export default App;
