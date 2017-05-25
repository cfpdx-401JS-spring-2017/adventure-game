import React from 'react';

export default function EnterUserName(props) {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        props.setName(e.target.elements.nameinput.value);
        props.goToScene(props.currentScene.nextScene);
      }}>
        <label>What's Your Name: <input name="nameinput"></input></label>
        <p><button className="button" type="submit">{props.currentScene.buttonText}</button></p>
      </form>
    </div >
  );
}
