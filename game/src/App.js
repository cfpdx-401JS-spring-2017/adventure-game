import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Scene from './Scene';
import './App.css'



class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      sceneSelected: 'MainContainer',
      currentScene: null,
      vehicle: null,
      leftButton: 'Continue',
      rightButton: 'Catch your breath',
      currentMessage: 'Choose your adventure above',
      scenarios: null,
      playerName: null,
      currentWeapon: 'stick',
      weapons: null,
      currentHealth: 400,
      attackDamage: 50,
      monster: {
         name: "Monster",
         health: 100,
         damage: 100,
         attacks: ['bashed you with stick', 'ripped off you arm', 'spit on you'],
         isAlive: true
      }
    };

    this.initialState =this.state;
    this.changeScene = this.changeScene.bind(this);
    this.changeScenario = this.changeScenario.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.run = this.run.bind(this);
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
    let { monster} = this.state;

    const scene = this.state.currentScene;
    monster.name = `${scene} monster`
    let possibleScenarios = [`LOOKOUT! You have stumbled upon a ${monster.name} !`, `Your ${this.state.vehicle} is attacked by a ${scene} monster!`, `Your ${this.state.vehicle} has been ransacked by a swarm of ${scene} creatures!`]

    this.setState({ 
      currentMessage: possibleScenarios[this.getRandomAttack()],
      leftButton: 'Fight',
      rightButton: 'Run',
      scenarios: possibleScenarios, 
      monster
    });
  }

  fightScenario(){
    let {currentHealth, monster, attackDamage} = this.state;
    let userHealth = currentHealth - monster.damage;
    
    if(currentHealth <= 0){
      this.reset();
      this.setState({
        currentMessage: `You died and washed up on nearby beach pick a new scene to start over`,
      });
    }else{
      this.setState({
        currentHealth: userHealth,
        currentMessage: `${monster.name} ${monster.attacks[this.getRandomAttack()]}`,
        leftButton: 'Hitback',
      })
    }

  }

  hitBack() {
    let {monster, attackDamage } = this.state;
    let health = monster.health - attackDamage;
    monster.health = health;

    this.setState({
      currentMessage: `You hit the ${monster.name} and did ${attackDamage} amount of damage`,
      leftButton: 'Fight',  
      monster
    })
  }
  
  getRandomAttack() {
    return Math.floor(Math.random() * 3);
  }

  buttonHandler () {
    if (this.state.leftButton === 'Continue'){
      this.changeScenario();
    }else if (this.state.leftButton === 'Fight') {
      this.fightScenario();
    }else if (this.state.leftButton === 'Hitback'){
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
    let { playerName, currentWeapon, weapons, currentHealth, attackDamage } = this.state;
    let playerObj = { playerName,currentWeapon,weapons,currentHealth,attackDamage};

    return (

        <div className="App">
          <Scene />
        </div>
    );
  }
}

export default App;
