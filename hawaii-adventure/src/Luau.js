import React from 'react';
import Dead from './Dead';
import Beach from './Beach';
import Drunk from './Drunk'
import ChangeSceneButton from './ChangeSceneButton';
import luau from './images/luau.jpg'

export default function Luau ({changeScene, Scene, name}) {
return(
<div className="Luau">
<h2>Oh no {name}! You've encountered a touristy Luau at the resort. Do you throw on a grass skirt and join in on the hula action, head back to the bar, or go surfing with your new sufer homie?  </h2>
 <img src={luau} className="luau-image" alt='luau' />
<ChangeSceneButton
changeScene={changeScene}
Scene={Dead}
buttonMessage="Stay at The Luau"
/>
<ChangeSceneButton
changeScene={changeScene}
Scene={Drunk}
buttonMessage="Go To Bar"
/>

<ChangeSceneButton
changeScene={changeScene}
Scene={Beach}
buttonMessage="Bail on Luau"
/>
</div>
);
}