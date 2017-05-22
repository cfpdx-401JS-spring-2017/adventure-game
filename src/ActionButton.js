import React from 'react';

export default function ActionButton(props) {
  const callback = props.callback || props.goToScene;
  return (
    <div>
      <button onClick={() => {
        callback(props.scene.nextScene);
      }}>
        {props.buttonText}
      </button>

      <button onClick={() => {
        props.goToScene(props.scene.prevScene);
      }}>
        Go back
      </button>
    </div>
  );
}