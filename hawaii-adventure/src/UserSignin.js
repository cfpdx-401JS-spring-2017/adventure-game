import React from 'react';
import './App.css';


function UserSignin(props) {
    return (
        <div className="App-header">
            <h2>Welcome To Hawaii Adventure {props.name}</h2>
        <p className="App-intro">
            To get started, enter your name:
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
      </div >
    );
}

export default UserSignin;