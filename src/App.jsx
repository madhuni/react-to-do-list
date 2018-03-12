import React, { Component } from 'react';

import ToDoList from './containers/ToDoList';

class App extends Component {
  render() {
    return (
      <div id="app">
        <ToDoList />
      </div>
    );
  }
}

export default App;