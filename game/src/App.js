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
      attackDamage: 50,
    };
    this.initialState = this.state;
    this.setUserHeath = this.setUserHeath.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  reset(name) {
    this.setState({
      playerName: name,
      currentHealth: 400,
      currentWeapon: 'stick',
      attackDamage: 50,
    });
  }

  setUserHeath(health) {
    let {currentHealth}= this.state;
    this.setState({currentHealth: health});
  }

  componentDidMount() {
    this.setState({ playerName: prompt('Enter your name to begin')});
  }

  render() {
    let { playerName, currentWeapon, currentHealth, attackDamage } = this.state;
    let playerObj = { playerName, currentWeapon, currentHealth, attackDamage};

    return (
        <div className="App">
          <CharacterStats player={playerObj} />
          <Scene setUserHeath={this.setUserHeath} currentHealth={this.state.currentHealth} attackDamage={attackDamage} reset={this.reset} playerName={playerName}/>
        </div>
    );
  }
}

export default App;
