import React, { Component } from 'react';
import Hammock from './Hammock';
import ChangeSceneButton from './ChangeSceneButton';
import Luau from './Luau';
import bar from './images/bar.jpg';

const drinks = [
    { name: 'beer', alcohol: 1 },
    { name: 'pina', alcohol: 2 },
    { name: 'margharita', alcohol: 4 },
    { name: 'mai tai', alcohol: 3 },
    { name: 'tequila', alcohol: 2 }
];

export default class Drunk extends Component {

    constructor(props) {
        super(props);

        this.state = {
            drunk: []
        };
    }

    haveADrink(drink) {
        let { drunk } = this.state;
        this.props.addAlcohol(drink.alcohol);
        drunk = drunk.slice();
        drunk.push(drink);
        this.setState({ drunk });
    }

    render() {
        const { drunk } = this.state;

        return (
            <div>

                <h1>You've decided to soak in some rays at this outdoor bar...choose a drink!</h1>
                  <img src={bar}  alt='bar' /><br></br>
                {drinks.map(drink => (
                    <button className="drink-button"
                        key={drink.name}
                        onClick={() => this.haveADrink(drink)}>
                        Have a {drink.name}!
                </button>
                ))
                }

                <h2>You've knocked back {drunk.length} drinks:
                    {[
                        drunk.length === 1 && <span key=">0"> You're having the best time chatting with a surfer dude at the bar.  Have another drink.</span>,
                        drunk.length === 2 && <span key=">1"> Choose another drink -OR- keep exploring the resort?
                        <ChangeSceneButton
                                changeScene={this.props.changeScene}
                                Scene={Luau}
                                name={this.props.name}
                                buttonMessage="Explore Resort" /></span>,
                        drunk.length === 3 && this.props.changeScene(Hammock)

                    ]}
                </h2>
                <ul>
                    {drunk.map((d, i) => <li key={i}>{d.name}</li>)}
                </ul>

            </div>

        );

    }
}
