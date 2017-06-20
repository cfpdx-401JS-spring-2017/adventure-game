import React from 'react';
import Dead from './Dead';
import Beach from './Beach';
import ChangeSceneButton from './ChangeSceneButton';

export default function Luau ({changeScene, Scene, name}) {
return(
<div className="Luau">
<h2>Oh no {name}! You've encountered a touristy Luau that is blocking your beach access! Do you throw on a grass skirt and hula your way through the crowd? or find an expert surfer who will take you to the best beaches on the island? </h2>
<ChangeSceneButton
changeScene={changeScene}
Scene={Dead}
buttonMessage="Stay at The Luau"
/>
<ChangeSceneButton
changeScene={changeScene}
Scene={Beach}
buttonMessage="Bail on Luau"
/>
</div>
);
}