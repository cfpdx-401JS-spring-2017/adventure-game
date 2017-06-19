import React, { Component } from 'react';
import './App.css';
import UserSignin from './UserSignin';
// import pina from './images/pina.jpg';
// import luau from './images/luau.jpg'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      scene: UserSignin,


    }
    this.changeName = this.changeName.bind(this);
    this.changeScene = this.changeScene.bind(this);

  }


  changeName(name) {
    this.setState({ name });
  }

  changeScene(scene) {
    this.setState({ scene });
  }


  render() {
    const { name } = this.state;


    return (
      <div>
        <UserSignin
          name={name}
          changeName={this.changeName}
          changeScene={this.changeScene}
        />


      </div>
    );
  }
}


