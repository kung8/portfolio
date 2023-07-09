import React, { useState, useEffect } from "react";
import { formatTime } from './time';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const [currentLap, setCurrentLap] = useState(1);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const handleLap = () => {
        const lapsCopy = [...laps];
        const firstTime = lapsCopy[0]?.time ?? 0;
        const difference = time - firstTime;
        lapsCopy.unshift({ time, lap: currentLap, difference });
        setLaps(lapsCopy);
        setCurrentLap(lap => lap + 1);
    }

    const handleReset = () => {
        setTime(0)
        setLaps([]);
        setCurrentLap(1);
    };

    const reducedLaps = laps.map(({ difference }) => difference) ?? [];
    const minLap = Math.min(...reducedLaps);
    const maxLap = Math.max(...reducedLaps);

    return (
        <div className="stopwatch-page">
            <div className="stopwatch-container">
                <h1 className="heading">Stopwatch</h1>
                <div className="stopwatch">
                    <p className="stopwatch-time">
                        {formatTime(time)}
                    </p>
                    <div className="stopwatch-buttons">
                        <button className={`stopwatch-button ${isRunning ? 'stop-btn' : 'play-btn'}`} onClick={() => setIsRunning(!isRunning)}>
                            {isRunning ? "Stop" : "Start"}
                        </button>
                        {isRunning ? (
                            <button className="stopwatch-button lap-btn" onClick={handleLap}>
                                Lap
                            </button>
                        ) : (
                            <button className="stopwatch-button reset-btn" disabled={time === 0} onClick={handleReset}>
                                Reset
                            </button>
                        )}
                    </div>
                    <div className="stopwatch-laps">
                        {laps.map(({ lap, difference }, index) => (
                            <div key={index} className={`lap-item ${minLap === difference ? 'smallest' : ''} ${maxLap === difference ? 'largest' : ''}`}>
                                <span>Lap {lap}</span>
                                <span>{formatTime(difference)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch;

/*
    Referenced this article for some basic implementation of the time portion. 
    https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e
*/