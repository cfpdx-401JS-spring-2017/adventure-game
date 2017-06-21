import React from 'react';
import hammock from './images/hammock.jpg';
import ChangeSceneButton from './ChangeSceneButton';
import PinaColada from './PinaColada';

export default function Hammock ({changeScene, Scene, name}) {

    return(
         <div className="Hammock">
          <h2>Well, {name}, you are partying too hard.  You should sleep it off on this hammock. </h2>
          <img src={hammock} className="hammock" alt='hammock' />
           <ChangeSceneButton
                changeScene={changeScene}
                Scene={PinaColada} 
                name={name}
                buttonMessage="Click Here After Your Nap"/>
        </div>
    )
}