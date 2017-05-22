import React, { Component } from 'react';
import { Button } from 'react-materialize';
import CharacterStats from './CharacterStats';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerName: null,
      sceneSelected: 'MainContainer',
      currentScene: null,
      vehicle: null,
      leftButton: 'Continue',
      rightButton: 'Catch your breath',
      currentMessage: 'Choose your adventure above',
      scenarios: null
    };

    this.changeScene = this.changeScene.bind(this);
    this.changeScenario = this.changeScenario.bind(this);
    this.run = this.run.bind(this);
  }
  
  componentDidMount() {
    this.setState({ playerName: prompt('Enter your name to begin')});
  }

  changeScene(e) {
    const scene = e.target.textContent.toLowerCase();
    console.log(scene);

    this.setState({
      sceneSelected: `MainContainer ${scene}`,
      currentScene: scene,
      currentMessage: `You look around and see an expansive ${scene}`,
      leftButton: 'Continue',
      rightButton: 'Catch your breath'
    });

    if (scene === 'sky') {
      this.setState({ vehicle: 'aircraft'});
    } else if (scene === 'sea') {
      this.setState({ vehicle: 'boat'});
    } else {
      this.setState({ vehicle: 'elephant'});
    }
  }

  changeScenario(e) {
    const scene = this.state.currentScene;

    let possibleScenarios = [`LOOKOUT! You have stumbled upon a ${scene} monster!`, `Your ${this.state.vehicle} is attacked by a ${scene} monster!`, `Your ${this.state.vehicle} has been ransacked by a swarm of ${scene} creatures!`]

    this.setState({ 
      currentMessage: possibleScenarios[0],
      leftButton: 'Fight',
      rightButton: 'Run',
      scenarios: possibleScenarios
    });
  }

  run() {
    this.setState({
      sceneSelected: `MainContainer`,
      currentScene: null,
      currentMessage: `You can run, but you still have to pick an adventure`,
      leftButton: 'Continue',
      rightButton: 'Catch your breath'
    });
  }

  render() {
    return (
      <div className={this.state.sceneSelected}>
        <CharacterStats playerName={this.state.playerName}/>
        <div className="App">
          <div id="scenes">
            <Button className="scenes" waves='light' onClick={this.changeScene}>Sky</Button>
            <Button className="scenes" waves='light' onClick={this.changeScene}>Sea</Button>
            <Button className="scenes" waves='light' onClick={this.changeScene}>Forest</Button>  
          </div>
          <div>
            <h1>
              {this.state.currentMessage}
            </h1>
          </div>
          <div className="ImageContainer">
          </div>
          <div id="button-container">
            <Button className="Button" waves='light' onClick={this.changeScenario}>{this.state.leftButton}</Button>
            <Button className="Button" waves='light' onClick={this.run}>{this.state.rightButton}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
