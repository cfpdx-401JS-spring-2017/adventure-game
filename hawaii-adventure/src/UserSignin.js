import React from 'react';
import './App.css';
import ChangeSceneButton from './ChangeSceneButton';
// import Image from './images/welcome.jpg';


function UserSignin({name, scene, changeScene, changeName}) {
    return (
        <div className="welcome">
            <h2>Welcome To Hawaii Your Adventure {name}</h2>
        <p className="get-started">
            To get started, enter your name:
        </p>
        <form onSubmit={event => {
            event.preventDefault();
            changeName(event.target.elements.signin.value);
        }}
            className="intro-form" >
            <input style={{
                fontSize: '15px',
                borderRadius: '5px',
                backgroundColor: 'white'
            }}
                name="signin"
                type="text"
                placeholder="Enter Name" />
            <input
                style={{
                    fontSize: '15px',
                    borderRadius: '5px',
                    backgroundColor: 'white'
                }}
                type="submit"
                name="submit"
            />
        </form>
         <ChangeSceneButton />
        
      </div >
    );
}

export default UserSignin;