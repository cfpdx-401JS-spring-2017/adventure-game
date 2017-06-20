import React from 'react';
import dead from './images/dead.png';

export default function Dead() {
return(
<div className="dead">
<h2>Oh no! You died of boredom at the Luau! GAME OVER</h2>
<img src={dead} className="deadImage" alt='dead' />
</div>
);
}