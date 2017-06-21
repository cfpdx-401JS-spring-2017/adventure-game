import React, { Component } from 'react';
import './App.css';
import UserSignin from './UserSignin';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      Scene: UserSignin,
      // alcohol:0
    


    }
    this.changeName = this.changeName.bind(this);
    this.changeScene = this.changeScene.bind(this);
    this.addAlcohol = this.addAlcohol.bind(this);

  }


  changeName(name) {
    this.setState({ name });
  }

  changeScene(Scene) {
    this.setState({ Scene });
  }

  addAlcohol(alcohol) {
    alcohol = Math.max(this.state.alcohol + alcohol, 0);


    }


  render() {
    const { name , Scene} = this.state;


    return (
      <div>
        <Scene
          name={name}
          changeName={this.changeName}
          changeScene={this.changeScene}
          addAlcohol={this.addAlcohol}
        />


      </div>
    );
  }
}


