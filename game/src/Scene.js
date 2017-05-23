import React, { Component } from 'react';
import { Button } from 'react-materialize';

class Scene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      leftButton: 'Continue',
      rightButton: 'Catch your breath',
      // vehicle: null,
      // scenarios: null,
      currentMessage: 'Choose your adventure above',
      monster: {
         name: "Monster",
         health: 100,
         damage: 100,
         attacks: ['bashed you with stick', 'ripped off you arm', 'spit on you'],
         isAlive: true
      }
    }

    
    this.buttonHandler = this.buttonHandler.bind(this);
  }

    getRandomAttack() {
      return Math.floor(Math.random() * 3);
    }

  changeScenario() {
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
    let { currentHealth, monster } = this.state;
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

  buttonHandler () {
    let {leftButton} = this.state;
    if (leftButton === 'Continue'){
      this.changeScenario();
    }else if (leftButton === 'Fight') {
      this.fightScenario();
    }else if (leftButton === 'Hitback'){
      this.hitBack();
    }
  }


  render() {
    return (
        <div id="gameBoard">
          <div>
            <Button className="scenes" waves='light' onClick={this.props.changeScene}>Sky</Button>
            <Button className="scenes" waves='light' onClick={this.props.changeScene}>Sea</Button>
            <Button className="scenes" waves='light' onClick={this.props.changeScene}>Forest</Button>
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