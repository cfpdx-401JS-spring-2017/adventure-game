import React, { Component } from 'react';
import './App.css';
import UserSignin from './UserSignin'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }

    this.changeName=this.changeName.bind(this);

  }

  changeName(name) {
    this.setState({ name });
  }





  render() {
    const { name } = this.state;


    return (
      <div>
        <UserSignin
          name={name}
          changeName={this.changeName}

        />

      </div>

    );
  }
}



export default App;
