import React, { Component } from 'react';

class CharacterStats extends Component {
  render() {
    let { playerName, currentWeapon, weapons, currentHealth, attackDamage} = this.props.player;
    
    return (
      <div className="CharacterStats">
        <h2>Character Info</h2>
        <ul>  
          <li><span>Name:</span> {playerName}</li>
          <li><span>Health:</span> {currentHealth}</li>
          <li><span>Current Weapon:</span> {currentWeapon}</li>
          <li><span>Attack Damage:</span> {attackDamage}</li>
        </ul>
      </div>
    );
  }
}

export default CharacterStats;
