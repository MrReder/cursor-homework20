import React, { useState, useEffect } from 'react';
import './style.css';
const Timer = (props) => {
    const { time, autostart, onTick, step, onTimeEnd, onTimeStart, onTimePause } = props;
    const [seconds, setSeconds] = useState(time);
    const [isRunning, setIsRunning] = useState(autostart)
    useEffect(() => {
        if (isRunning) {
            const id = window.setInterval(() => setSeconds(seconds => seconds - 1), step);
            onTick(seconds)
            if (seconds === -1) {
                onTimeEnd();
                setSeconds(time)
            }
            return () => window.clearInterval(id)
        }
    }, [isRunning, seconds, time]);

    const handleClickPlay = () => {
        setIsRunning(true)
        onTimeStart(seconds, renderTime);
    }
    const handlePauseClick = () => {
        setIsRunning(false)
        onTimePause(seconds, renderTime)
    }
    const handleRestartClick = () => {
        setSeconds(time)
        setIsRunning(true);
    }
    const renderTime = (currentTime) => {
        const secondsInMinute = 60
        if (currentTime > secondsInMinute) {
            const minutes = Math.floor(currentTime / secondsInMinute)
            const currentSeconds = currentTime - (secondsInMinute * minutes)
            if (!currentSeconds) {
                return `${minutes}:00`;
            }
            if (currentSeconds < 10) {
                return `${minutes}:0${currentSeconds}`;
            }
            return `${minutes}:${currentSeconds}`
        }
        return currentTime
    }
    return (
        <div>
            <div>
                <div className="buttons-wrapper">
                    <h1>{renderTime(seconds)}</h1>
                </div >
                <button style={{ display: isRunning || !seconds ? 'none' : 'block' }}
                    onClick={handleClickPlay} className="btn">Play</button>
                <button style={{ display: isRunning && seconds ? 'block' : 'none' }}
                    onClick={handlePauseClick} className="btn">Pause</button>
                <button onClick={handleRestartClick} className="btn">Restart</button>
            </div>
        </div>
    )
}
export default Timer;