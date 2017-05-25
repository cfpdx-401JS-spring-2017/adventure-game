import React from 'react';

export default function ActionButton(props) {
  const callback = props.goToScene;

  return (
    <div>
      {props.currentScene.buttonText &&
        <button className="button" onClick={() => {
          callback(props.currentScene.nextScene);
        }}>
          {props.buttonText}
        </button>
      }

      {props.currentScene.choice3 &&
        <button className="button" onClick={() => {
          callback(props.currentScene.nextScene2);
        }}>
          {props.buttonText2}
        </button>
      }

      {props.currentScene.items.length > 0 &&
        props.currentScene.items.map(item => {
          return <button className="button" key={item.name} onClick={() => {
            props.addItem(item);
            const index = props.currentScene.items.indexOf(item);
            props.currentScene.items.splice(index, 1);
          }}>
            Pick Up {item.name}
          </button>;
        })
      }

      {props.currentScene.villain &&
        <button className="button" onClick={() => {
          props.fightVillain();
        }}>
          {props.buttonText2}
        </button>
      }

      {props.currentScene.noncommital &&
        <button className="button" onClick={() => {
          props.goToScene(props.currentScene.prevScene);
        }}>
          Go back
      </button>}
    </div>
  );
}