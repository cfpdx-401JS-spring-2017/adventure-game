import React from 'react';
import './App.css';
import pina from './images/pina.jpg';
import Luau from './Luau';
import Hammock from './Hammock';
import beer from './images/beer.jpg';
import ChangeSceneButton from './ChangeSceneButton';
// import GameIntro from './GameIntro';

export default function PinaColada({ name, changeScene, Scene, buttonMessage }) {
return (
<div className="adventureMessage">
<h2>Surf's up, {name}! It's time to cruise to the beach! </h2>

        <h2>But grab a drink first, duh!</h2>

        <img src={pina} className="pinaImage" alt='pina' />
        <ChangeSceneButton
            buttonMessage="Pina Colada"
            changeScene={changeScene}
            Scene={Luau} />
        <img src={beer} className="pinaImage" alt='beer' />
        <ChangeSceneButton
            buttonMessage="Beer Colada"
            changeScene={changeScene}
            Scene={Hammock} />
    </div>

);
}
