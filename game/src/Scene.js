import React, { Component } from 'react';
import { Button } from 'react-materialize';

class Scene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      leftButton: 'Continue',
      rightButton: 'Catch your breath',
      vehicle: null,
      scenarios: null,
      currentMessage: 'Choose your adventure above',
      currentScene: "GameBoard",
      monsterName: "Monster",
      health: 100,
      damage: 100,
      attacks: ['bashed you with stick', 'ripped off you arm', 'spit on you'],
      isAlive: true,

    }

    this.changeScene = this.changeScene.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.run = this.run.bind(this);
    this.changeScenario = this.changeScenario.bind(this);
  }

  getRandomAttack() {
    return Math.floor(Math.random() * 3);
  }

  changeScenario() {
    let { monsterName, currentScene, currentVehicle } = this.state;
    monsterName = `${currentScene} monster`
    let possibleScenarios = [`LOOKOUT! You have stumbled upon a ${monsterName} !`, `Your ${currentVehicle} is attacked by a ${currentScene} monster!`, `Your ${currentVehicle} has been ransacked by a swarm of ${currentScene} creatures!`]

    this.setState({
      currentMessage: possibleScenarios[this.getRandomAttack()],
      leftButton: 'Fight',
      rightButton: 'Run',
      scenarios: possibleScenarios,
      monsterName
    });
  }

  changeScene(e) {
    const scene = e.target.textContent.toLowerCase();

    if (scene === 'sky') {
      this.setState({
        currentScene: scene,
        currentMessage: `You look around and see an expansive ${scene}`,
        currentVehicle: 'aircraft'
      });
    } else if (scene === 'sea') {
      this.setState({ 
        currentScene: scene,
        currentMessage: `You look around and see an expansive ${scene}`,
        currentVehicle: 'boat'
      });
    } else {
      this.setState({
        currentVehicle: 'elephant',
        currentScene: scene,
        currentMessage: `You look around and see an expansive ${scene}`
      });
    }
  }

  fightScenario() {
    let { damage, monsterName, attacks} = this.state;
    let {currentHealth, reset, playerName} = this.props;
    let userHealth = currentHealth - damage;

    if (currentHealth <= 0) {
      this.setState({
        currentMessage: `You died and washed up on nearby beach pick a new scene to start over`,
      });
      reset(playerName);
    } else {
      this.setState({
        currentMessage: `${monsterName} ${attacks[this.getRandomAttack()]}`,
        leftButton: 'Hitback',
      });
      this.props.setUserHeath(userHealth);
    }

  }

  hitBack() {
    let { monsterName, health } = this.state;
    let {attackDamage} = this.props;
    let newHealth = health - attackDamage;

    this.setState({
      currentMessage: `You hit the ${monsterName} and did ${attackDamage} amount of damage`,
      leftButton: 'Fight',
      monsterName,
      health: newHealth
    })
  }

  buttonHandler() {
    let { leftButton } = this.state;
    if (leftButton === 'Continue') {
      this.changeScenario();
    } else if (leftButton === 'Fight') {
      this.fightScenario();
    } else if (leftButton === 'Hitback') {
      this.hitBack();
    }
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
      <div className={this.state.currentScene}>
        <div>
          <Button className="scenes" waves='light' onClick={this.changeScene}>Sky</Button>
          <Button className="scenes" waves='light' onClick={this.changeScene}>Sea</Button>
          <Button className="scenes" waves='light' onClick={this.changeScene}>Forest</Button>
        </div>
        <div>
          <h1>
            {this.state.currentMessage}
          </h1>
        </div>
        <div id="actionButtons">
          <Button className="Button" waves='light' onClick={this.buttonHandler}>{this.state.leftButton}</Button>
          <Button className="Button" waves='light' onClick={this.run}>{this.state.rightButton}</Button>
        </div>
      </div>
    );
  }
}

export default Scene;