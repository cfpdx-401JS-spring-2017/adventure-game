import React from 'react';
import beach from './images/beach.jpg';
import ChangeSceneButton from './ChangeSceneButton';
import UserSignin from './UserSignin'

export default function Beach({changeScene, Scene}) {
    return (
        <div classname="beach">
            <img src={beach} className="beachImage" alt='beach' />
            <h2>You made it to the beach! YOU WIN!!!</h2>
            <ChangeSceneButton
         changeScene={changeScene}
         Scene={UserSignin}
         buttonMessage="PLAY AGAIN!!"/>
        </div>
    );
}