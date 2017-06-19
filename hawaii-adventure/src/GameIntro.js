import React from 'react';
import './App.css';
import Image from './images/welcome.jpg';
import ChangeSceneButton from './ChangeSceneButton'
import SendMessage from './SendMessage';

export default function GameIntro({ name }) {
    return (

        <div className="adventureMessage">
            <h1>Good Morning {name}, you have been transported to Hawaii. Congratulations and Mahalo! </h1>
            <img src={Image} className="welcomeImage" alt='welcome'/>
            <SendMessage/>
            <ChangeSceneButton/>
        </div>

    )
}