import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const initialMinute = 1;
    const initialSeconds = 30;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let interval = setInterval(() => {
            if (props.restart) {
                setSeconds(initialSeconds);
                setMinutes(initialMinute);
            }
            else if (props.start) {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (seconds === 0) {
                    clearInterval(interval);
                }
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    });



    return (
        <div>
            { minutes === 0 && seconds === 0 ?
                <h1>00:00</h1> :
                <h1>0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>}
        </div>

    )
}

export default Timer;




