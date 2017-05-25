import React, { Component } from 'react';
import './App.css';
import welcome from './welcome';

class App extends Component {
  constructor() {
    super();

    this.state = {
      textHeader: welcome.textHeader,
      textBody: welcome.textBody,
      adventureImage: welcome.adventureImage,
      textButton: welcome.textButton,
      nextAdventure: welcome.nextAdventure,
      previousAdventure: welcome.previousAdventure
    }
  }

  changeScene(nextScene) {
    this.setState({ 
      textHeader: nextScene.textHeader,
      textBody: nextScene.textBody,
      adventureImage: nextScene.adventureImage,
      textButton: nextScene.textButton,
      nextAdventure: nextScene.nextAdventure,
      previousAdventure: nextScene.previousAdventure
    });
  }

  render() {
    const { textHeader, textBody, textButton, adventureImage, nextAdventure } = this.state;


    return (
      <div>
        <div className="adventureMessage">
          <h2>{textHeader}</h2>
          <h2>{textBody}</h2>
          <img src={adventureImage} />
          <button
            onClick={e => {
              e.preventDefault();
              this.changeScene(nextAdventure)
            }}
          >
            {textButton}</button>
        </div>
        {/*        
        <img src={Image} className="welcomeImage" />
        <h2>Send A message to all your rained out PDX homies: {this.state.message}</h2>
        <form className="message-form"
          onSubmit={event => {
            event.preventDefault();
            this.changeMessage(event.target.elements.message.value);
          }}
        >
          <input style={{
            fontSize: '15px',
            borderRadius: '5px',
            backgoundColor: 'while'
          }}
            name='message'
            type='text'
            placeholder='Message To Homies:' />
          <input style={{
            fontSize: '15px',
            borderRadius: '5px',
            backgroundColor: 'white'
          }}
            type='submit'
            name='submit'
          />
        </form>
        <button className="move-on" onClick={() => this.changeScene('nextScene')}>CheckOut What Happens Next!</button>


        <div className="adventureMessage">
          <h2>Surf's up, {name}! It's time to cruise to the beach! </h2>

          <h2>But grab a Pina Colada first, duh!</h2>

          <img src={Pina} className="pinaImage" onClick={this.changeImage('')} />
          <form className="message-form">

          </form>
          <div className="Luau">
             <h2>Oh no {name}! You've encountered a touristy Luau that is keeping you from assessing he beach! </h2>
            <img src={Luau} className="luau"/>
          </div>
        
        </div>*/}
      </div>

    );
  }
}



export default App;
