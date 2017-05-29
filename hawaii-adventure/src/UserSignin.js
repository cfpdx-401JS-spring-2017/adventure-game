import React from 'react';
import './App.css';
import welcome from './images/welcome.jpg';


function UserSignin(props) {
    return (
        <div className="welcome">
            <h2>Aloha {props.name}!</h2>
        <p className="get-started">
            Tell us your name:
        </p>
        <form onSubmit={event => {
            event.preventDefault();
            props.changeName(event.target.elements.signin.value);
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
        <div className="welcomeImageContainer"
        style={{
            backgroundImage:`url(${welcome})`,
            backgroundSize: 'cover',}}>
        </div>
      </div >
    );
}

export default UserSignin;