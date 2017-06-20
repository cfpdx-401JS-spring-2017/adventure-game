import React, { Component } from 'react';

export default class SendMessage extends Component {
constructor() {
super();
this.state = {
message: ''
}

}

changeMessage(message) {
    this.setState({ message });
}

render() {

    return (

        <div>
            <h2>Send A message to all your rained out PDX homies: {this.state.message}</h2>
            <form className="message-form"
                onSubmit={event => {
                    event.preventDefault();
                    this.changeMessage(event.target.elements.message.value);
                }}
            >
                <input style={{
                    fontSize: '15px',
                    borderRadius: '5px',
                    backgoundColor: 'while'
                }}
                    name='message'
                    type='text'
                    placeholder='Message To Homies:' />
                <input style={{
                    fontSize: '15px',
                    borderRadius: '5px',
                    backgroundColor: 'white'
                }}
                    type='submit'
                    name='submit'
                />
            </form>
        </div>
    )
}
}