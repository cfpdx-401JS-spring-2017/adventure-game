import React, { Component } from 'react';
import CharacterStats from './CharacterStats';
import { Button } from 'react-materialize';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="Scene">
        <CharacterStats player={playerObj} />
        <div id="gameBoard">
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
      </div>
    );
  }
}

export default Scene;