import React from 'react';
import beach from './images/beach.jpg';

export default function Beach() {
return (
<div classname="beach">
<img src={beach} className="beachImage" alt='beach' />
<h2>You made it to the beach! YOU WIN!!!</h2>
</div>
);
}