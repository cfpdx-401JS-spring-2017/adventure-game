import React, { Component } from 'react';
import { Button, Card, Row, Col, Icon, Collection, CollectionItem} from 'react-materialize';
import './App.css'
import Image from './image.jpg';

class App extends Component {
  render() {
    return (
      <div className="MainContainer" style={{ 
        backgroundImage: 'url(' + Image + ')',
        backgroundSize: 'cover',
      }}>
        <div className="CharacterStats">
          <h2>Character Info</h2>
          <ul>  
            <li><span>Name:</span> Asap Rocky</li>
            <li><span>Current Weapon:</span> Stick</li>
            <li><span>Items:</span> Sword, Napkin, Blanket</li>
            <li><span>Health:</span> 400 hp</li>
            <li><span>Attack Damage:</span> 5 ap</li>
          </ul>
        </div>
        <div className="App">
          <div>
            <h1>You approach a cave with bones and you are attacked by flying Eagle...</h1>
          </div>
          <div className="ImageContainer">
          </div>
          <div id="button-container">
            <Button className="Bobo" waves='light'>button</Button>
            <Button className="Bobo" waves='light'>button</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
