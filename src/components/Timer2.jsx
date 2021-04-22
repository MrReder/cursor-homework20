import React, { useState, useEffect } from 'react';

const Timer2 = () => {
    const [seconds, setSeconds] = useState(12);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            if (isRunning) {
                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                } else if (seconds === 0) {
                    // clearInterval(interval); You should use this case if you want to stop timer on 0 seconds
                    setSeconds(12);
                }
            }

        }, 1000);
        return () => {
            clearInterval(interval);
        };


    }, [isRunning, seconds]);
    return (
        <div className="timer2-wrapper">
            <h1>{seconds}</h1>
            <div className="buttons-wrapper">
                {
                    isRunning ?
                        (<button className="btn" onClick={() => setIsRunning(false)}>Pause timer</button>) :
                        (<button className="btn" onClick={() => setIsRunning(true)}>Start timer</button>)
                }
                <button className="btn" onClick={() => {
                    setIsRunning(false);
                    setSeconds(12);
                }}>Restart timer</button>

            </div>
        </div>

    )
}

export default Timer2;