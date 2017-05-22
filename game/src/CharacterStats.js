import React, { Component } from 'react';
import './App.css'

class CharacterStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeapon: 'stick',
      weapons: null,
      currentHealth: 400,
      attackDamage: 5
    };
  }

  render() {

    let { currentWeapon, weapons, currentHealth, attackDamage } = this.state;

    return (
      <div className="CharacterStats">
        <h2>Character Info</h2>
        <ul>  
          <li><span>Name:</span> {this.props.playerName}</li>
          <li><span>Current Weapon:</span> {currentWeapon}</li>
          <li><span>Weapons:</span> {weapons}</li>
          <li><span>Health:</span> {currentHealth}</li>
          <li><span>Attack Damage:</span> {attackDamage}</li>
        </ul>
      </div>
    );
  }
}

export default CharacterStats;
