import React from 'react';
import Drunk from './Drunk'
import ChangeSceneButton from './ChangeSceneButton';
import pool from './images/pool.jpg'

export default function Pool({changeScene, Scene, name}) {
        return (
            <div>
                <h1>You take a quick swim, but the heat is getting to you.  Head to the bar for a refreshment!</h1>
                 <img src={pool} alt='resort' />
                <ChangeSceneButton
                changeScene={changeScene}
                Scene={Drunk} 
                name={name}
                buttonMessage="Go To The Bar"/>
            </div>
        );
    }