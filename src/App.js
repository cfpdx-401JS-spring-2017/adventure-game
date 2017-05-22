import React, { Component } from 'react';
import landingScene from './scenes/01-landing'; //might need to change this because of scene module
import User from './User';
import Button from './ActionButton';
import Form from './EnterUserName';
//import scenes but what do we do with them?

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      scene: landingScene
    };

    this.setName = this.setName.bind(this);
    this.goToScene = this.goToScene.bind(this);
  }

  setName(userName) {
    this.setState({ userName });
  }

  goToScene(scene) {
    this.setState({ scene });
    console.log(scene);
  }

  render() {
    const { userName, scene } = this.state;
    const { headerText, backgroundUrl, bodyText, buttonText } = scene;
    const form = 
    <Form
      scene={scene}
      setName={this.setName}
      goToScene={this.goToScene}
    />;
    const button = 
    <Button
      scene={scene}
      buttonText={buttonText}
      goToScene={this.goToScene}
      callback={scene.callback}
    />;
    const sceneAction = scene === landingScene ? form : button;

    return (
      <div className="main" style={{
        backgroundImage: `url(${backgroundUrl})`
      }}>
        <User userName={userName} />
        <div className="wrapper">
          <div className="Scene-header">
            <h2>{headerText}</h2>
          </div>
          <p> {bodyText} </p>
          {sceneAction}
        </div>
      </div>
    );
  }
}

export default App;
