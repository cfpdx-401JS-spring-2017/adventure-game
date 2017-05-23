import React, { Component } from 'react';

class CharacterStats extends Component {
  render() {
    return (
      <div className="CharacterStats">
        <h2>Character Info</h2>
        <ul>  
          <li><span>Name:</span> {this.props.playerName}</li>
          <li><span>Current Weapon:</span> {this.props.currentWeapon}</li>
          <li><span>Weapons:</span> {this.props.weapons}</li>
          <li><span>Health:</span> {this.props.currentHealth}</li>
          <li><span>Attack Damage:</span> {this.props.attackDamage}</li>
        </ul>
      </div>
    );
  }
}

export default CharacterStats;
