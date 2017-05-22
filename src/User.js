import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'name',
      items: '',
      health: 100
    };
  }

  incrementHealth(health) {
    this.setState(health);
  }

  addOrUseItem(item) {
    this.setState(item);
  }

  render() {
    const { items, health } = this.state;
    return (
      <div className="user-block">
        <p>Player: {this.props.userName}</p>
        <p>Items: {items}</p>
        <p>Health: {health} / 100</p>
      </div>
    );
  }
}

export default User;