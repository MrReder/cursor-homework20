import React, { Component } from 'react';
import Timer from './Timer';
import Timer2 from './Timer2';
import Timer3 from './Timer3';
import './style.css';

class TimersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 200,
            //custom by myself
            start: true,
            restart: undefined
        }
        //custom bymyself
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


    handleTimeEnd = () => {
        console.log('Час вийшов!')
        this.setState({
            time: this.state.time
        })
    }
    handleChangeTick = (seconds) => {
        console.log(seconds)
    }
    handleTimeStart = (timeLeft, renderTime) => {
        console.log(`Таймер запущено, залишилося: ${renderTime(timeLeft)}c`)
    }
    handleTimePause = (timeLeft, renderTime) => {
        console.log(`Таймер на паузі, залишилося: ${renderTime(timeLeft)}с`)
    }




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
                <div>
                    <Timer3 time={this.state.time} autostart={false} step={300} onTick={this.handleChangeTick}
                        onTimeEnd={this.handleTimeEnd}
                        onTimeStart={this.handleTimeStart}
                        onTimePause={this.handleTimePause} />
                </div>

            </div>
        )
    }


}

export default TimersPage;


