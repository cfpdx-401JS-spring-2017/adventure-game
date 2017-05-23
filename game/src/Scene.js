import React, { Component } from 'react';
import CharacterStats from './CharacterStats';
import { Button } from 'react-materialize';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftButton: 'Continue',
      rightButton: 'Catch your breath',
      // vehicle: null,
      // scenarios: null,
      // monster: {
      //    name: "Monster",
      //    health: 100,
      //    damage: 100,
      //    attacks: ['bashed you with stick', 'ripped off you arm', 'spit on you'],
      //    isAlive: true
      // }
    }
  }

  render() {
    return (
      <div className={`Scene ${this.props.scene}`}>
        <CharacterStats player={this.props.player} />
        <div id="gameBoard">
          <div>
            <Button className="scenes" waves='light' onClick={this.props.changeScene}>Sky</Button>
            <Button className="scenes" waves='light' onClick={this.props.changeScene}>Sea</Button>
            <Button className="scenes" waves='light' onClick={this.props.changeScene}>Forest</Button>
          </div>
          <div>
            <h1>
              {this.props.currentMessage}
            </h1>
          </div>
          <div id="actionButtons">
            <Button className="Button" waves='light' onClick={this.buttonHandler}>{this.state.leftButton}</Button>
            <Button className="Button" waves='light' onClick={this.run}>{this.state.rightButton}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Scene;