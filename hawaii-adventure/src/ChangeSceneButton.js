import React from 'react';
import GameIntro from './GameIntro';

export default function changeSceneButton(props) {
    return (
        <div>
            <button className="scene-button"
                onClick={() => props.changeScene(GameIntro)}>
                Start Your Adventure</button>
        </div>

    )
}