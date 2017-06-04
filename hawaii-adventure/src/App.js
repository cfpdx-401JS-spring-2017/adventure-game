import React, { Component } from 'react';
import './App.css';
import UserSignin from './UserSignin';
// import GameIntro from './GameIntro'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: '',
      scene: UserSignin,
      image: '',
      text: ''

    }
    this.changeName = this.changeName.bind(this);
    this.changeScene = this.changeScene.bind(this);
  }


  changeName(name) {
    this.setState({ name });
  }

  changeMessage(message) {
    this.setState({ message });
  }

  changeScene(scene) {
    this.setState({ scene });
  }
  changeImage(image) {
    this.setState({ image });

  }

  render() {
    const { name } = this.state;


    return (
      <div>
        <UserSignin
          name={name}
          changeName={this.changeName}
          changeScene={this.changeScene} />
      </div>
    );
  }
}


