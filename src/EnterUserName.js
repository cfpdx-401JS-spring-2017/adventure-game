import React from 'react';

export default function EnterUserName(props) {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        props.setName(e.target.elements.nameinput.value);
        props.goToScene(props.scene.nextScene);
      }}>
        <label>What's Your Name: <input name="nameinput"></input></label>
        <p><button type="submit">{props.scene.buttonText}</button></p>
      </form>
    </div >
  );
}
