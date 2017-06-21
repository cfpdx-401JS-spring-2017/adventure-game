import React from 'react';
import Drunk from './Drunk'
import ChangeSceneButton from './ChangeSceneButton';
import resort from './images/resort.jpg'
import Pool from './Pool';

export default function Lobby({changeScene, Scene, name}) {
        return (
            <div>
                <h1>You've stumbled upon a fancy resort. Why not sneak in and check it out? Where should you go first?</h1>
                 <img src={resort} alt='resort' />
                <ChangeSceneButton
                changeScene={changeScene}
                Scene={Drunk} 
                name={name}
                buttonMessage="Go To The Bar"/>
                <ChangeSceneButton
                changeScene={changeScene}
                Scene={Pool} 
                name={name}
                buttonMessage="Go To The Pool"/>
            </div>
        );
    }
