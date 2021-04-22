import React, { Component } from 'react';
import Timer from './Timer';
import Timer2 from './Timer2';
import './style.css';

class TimersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            start: true,
            restart: undefined
        }
        this.getStart = this.getStart.bind(this);
        this.getRestart = this.getRestart.bind(this);

    }

    getStart = () => {
        this.setState({ restart: true });
        setTimeout(() => { this.setState({ restart: false }) }, 1000);
    };

    getRestart = () => {
        this.setState(({ restart }) => ({
            restart: !restart
        }))
    };





    render() {
        const { start } = this.state;
        return (
            <div className="timer-wrapper">
                <Timer start={this.state.start} restart={this.state.restart} />
                <button onClick={this.getStart} className="btn">{start ? 'Pause' : 'Start'} timer</button>
                <button onClick={this.getRestart} className="btn">Restart timer</button>
                <div>
                    <Timer2 />
                </div>
            </div>
        )
    }


}

export default TimersPage;


// render() {
//     const { open } = this.state

//     return (
//         <div className="clock">
//             <button onClick={this.toggle}>{open ? 'Close' : 'Open'} Clock</button>
//             { open ? <Ticker /> : null}
//             <Buddy name="Sam" />
//         </div>

//     )
// }
