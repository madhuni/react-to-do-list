import React, { Component } from 'react';

import ToDoList from './containers/ToDoList';
import Header from './components/Header/Header';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    var styles = {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px'
    };

    return (
      <Aux>
        <Header />
        <div id="app" style={styles}>
          <ToDoList />
        </div>
      </Aux>
    );
  }
}

export default App;