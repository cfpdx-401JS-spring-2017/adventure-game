import React, { Component } from 'react';
import './App.css';
import UserSignin from './UserSignin';
import Transport from './Transport';
import pina from './images/pina.jpg';
import luau from './images/luau.jpg'

class App extends Component {
  constructor() {
    super();    

      this.state = {
      CurrentScene: Transport,
      name: '',
      message: '',
     
      text: ''
  }
    
        this.changeName = this.changeName.bind(this);

  }
  changeName(name) {
    this.setState({ name });
  }

  changeMessage(message) {
    this.setState({ message });
  }

  changeScene(nextScene) {
    this.setState({ nextScene });
  }
  changeImage(image) {
    this.setState({ image });

  }

  render() {
    const { name, message } = this.state;


    return (
      <div>
        <UserSignin
          name={name}
          changeName={this.changeName}
        />
        <Transport
          changeMessage={this.changeMessage}
          message={message}
          name={name}
        />
        

        <button className="move-on" onClick={() => this.changeScene('nextScene')}>CheckOut What Happens Next!</button>





        <div className="adventureMessage">
          <h2>Surf's up, {name}! It's time to cruise to the beach! </h2>

          <h2>But grab a Pina Colada first, duh!</h2>

          <img src={pina} className="pinaImage" onClick={this.changeImage} />
          <form className="message-form">

          </form>
          <div className="Luau">
            <h2>Oh no {name}! You've encountered a touristy Luau that is keeping you from assessing he beach! </h2>
            <img src={luau} className="luau" />
          </div>

        </div>

      </div>

    );
  }
}



export default App;
