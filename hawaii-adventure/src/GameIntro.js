import React from 'react';
import './App.css';
import Image from './images/welcome.jpg';
import ChangeSceneButton from './ChangeSceneButton'
import SendMessage from './SendMessage';
import PinaColada from './PinaColada'
// import UserSignin from './UserSignin'

export default function GameIntro({ name, changeScene, Scene }) {
return (

    <div className="adventureMessage">
        <h1>Good Morning {name}, you have been transported to Hawaii. Congratulations and Mahalo! </h1>
        <img src={Image} className="welcomeImage" alt='welcome' />
        <SendMessage 
        />
        <ChangeSceneButton
            changeScene={changeScene}
            Scene={PinaColada} 
            name={name}
            buttonMessage="Let The Fun Begin"/>
    </div>

)
}