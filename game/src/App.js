import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button waves='light'>button<Icon left>cloud</Icon></Button>
      </div>
    );
  }
}

export default App;
