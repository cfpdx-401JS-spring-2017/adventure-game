import React from 'react';
import dead from './images/dead.png';
import ChangeSceneButton from './ChangeSceneButton';
import UserSignin from './UserSignin'

export default function Dead( {changeScene, Scene}) {
  return(
  <div className="dead">
    <h2>Oh no! You died of boredom at the Luau! GAME OVER</h2>
    <img src={dead} className="deadImage" alt='dead' />
             <ChangeSceneButton
         changeScene={changeScene}
         Scene={UserSignin}
         buttonMessage="PLAY AGAIN!!"/>
  </div>
  );
}