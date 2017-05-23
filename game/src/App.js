import React, { Component } from 'react';
import Scene from './Scene';
import CharacterStats from './CharacterStats';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = { 
      playerName: null,
      currentHealth: 400,
      currentWeapon: 'stick',
      weapons: [],
      attackDamage: 50,
      currentScene: "App",
    };

    this.initialState = this.state;
    this.changeScene = this.changeScene.bind(this);
    // this.buttonHandler = this.buttonHandler.bind(this);
    // this.run = this.run.bind(this);
  }
  
  reset() {
    this.setState(this.initialState);
  }

  componentDidMount() {
    this.setState({ playerName: prompt('Enter your name to begin')});
  }

  changeScene(e) {
    const scene = e.target.textContent.toLowerCase();

    this.setState({
      currentScene: scene,
      // currentMessage: `You look around and see an expansive ${scene}`
    });

    // if (scene === 'sky') {
    //   this.setState({ currentVehicle: 'aircraft'});
    // } else if (scene === 'sea') {
    //   this.setState({ currentVehicle: 'boat'});
    // } else {
    //   this.setState({ currentVehicle: 'elephant'});
    // }
  }

  // run() {
  //   this.setState({
  //     sceneSelected: `MainContainer`,
  //     currentScene: null,
  //     currentMessage: `You can run, but you still have to pick an adventure`,
  //     leftButton: 'Continue',
  //     rightButton: 'Catch your breath'
  //   });
  // }

  render() {
    let { playerName, currentMessage, currentScene, currentWeapon, weapons, currentHealth, attackDamage } = this.state;
    let playerObj = { playerName, currentWeapon, weapons, currentHealth, attackDamage};

    return (
        <div className={this.state.currentScene} >
          <CharacterStats player={playerObj} />
          <Scene 
            currentMessage={currentMessage}
            scene={currentScene} 
            changeScene={this.changeScene} 
          />
        </div>
    );
  }
}

export default App;
