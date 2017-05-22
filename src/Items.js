// 1. Make items randomly generate into certain scenes
// 2. Allow users to pick up and store items
// 3. Make items disappear from screen

import React, { Component } from 'react';
import User from './User';

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['healing green tea', 'healing red tea', 'ninja stars']
    };
  }

  generateRandomNumber() {
    //
  }

  generateRandomItem() {
    let i = generateRandomNumber();
    let item = this.state.items[i];
  }

  pickUpItem() {
    
  }

  render() {
    return(
      <div>
        as
      </div>
    );
  }
}

export default Items;