import React, { useEffect, useState } from 'react';
import { formatNumber, formatTime } from './time';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;
        if (isRunning && time !== 0) {
            interval = setInterval(() => setTime(time - 1), 10);
        }
        if (isRunning && time === 0) {
            handleScrollTo();
            setIsRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const getNumbers = (number) => {
        const numbers = [null, null, null];
        for (let i = 0; i <= number + 3; i++) {
            if (i > number) {
                numbers.push(null);
            } else {
                numbers.push(i);
            }
        }
        return numbers;
    }

    const handleScroll = ({ type, setType }) => {
        const {
            top: optionTop,
            height: optionHeight
        } = document.querySelector(`#${type}-0`).getBoundingClientRect();

        const {
            top: actualSelectionTop,
            height: actualSelectionHeight
        } = document.querySelector('.actual-selection').getBoundingClientRect();

        const actualSelectionPosition = actualSelectionTop + actualSelectionHeight / 2;

        const value = Math.floor((actualSelectionPosition - optionTop) / optionHeight);

        setType(value);
    }

    const handleScrollTo = () => {
        const { height: optionHeight } = document.querySelector(`#hours-0`).getBoundingClientRect();
        document.querySelector(`.time.hours`).scrollTo({
            top: optionHeight * hours,
            behavior: 'smooth',
        })
        document.querySelector(`.time.minutes`).scrollTo({
            top: optionHeight * minutes,
            behavior: 'smooth',
        })
        document.querySelector(`.time.seconds`).scrollTo({
            top: optionHeight * seconds,
            behavior: 'smooth',
        })
    }

    const handleStart = () => {
        setIsRunning(true);
        const number = formatNumber({ hours, minutes, seconds });
        setTime(number);
    }

    const handlePause = () => {
        setIsRunning(false);
    }

    const handleResume = () => {
        setIsRunning(true);
    }

    const handleCancel = () => {
        setTime(0);
    }

    return (
        <div className="timer-page">
            <div className="timer-container">
                <h1 className="heading">Timer</h1>
                <div className="timer">
                    {
                        time > 0 ? (
                            <div className="timer-clock-container">
                                <div class="radialProgressBar progress-50">
                                    <div class="overlay"></div>
                                </div>
                                <div className="timer-time">
                                    {formatTime(time)}
                                </div>
                            </div>
                        ) : (
                            <div className="timer-selection">
                                <div className="actual-selection"></div>
                                <div className="timer-selector hours">
                                    <div className="time hours" onScroll={() => handleScroll({ type: 'hours', setType: setHours })}>
                                        {getNumbers(23).map((number, index) => <span key={'hours-' + index} id={'hours-' + number} className="number">{number}</span>)}
                                    </div>
                                    <p className="label">hr</p>
                                </div>

                                <div className="timer-selector minutes">
                                    <div className="time minutes" onScroll={() => handleScroll({ type: 'minutes', setType: setMinutes })}>
                                        {getNumbers(59).map((number, index) => <span key={'minutes-' + index} id={'minutes-' + number} className="number">{number}</span>)}
                                    </div>
                                    <p className="label">min</p>
                                </div>

                                <div className="timer-selector seconds">
                                    <div className="time seconds" onScroll={() => handleScroll({ type: 'seconds', setType: setSeconds })}>
                                        {getNumbers(59).map((number, index) => <span key={'seconds-' + index} id={'seconds-' + number} className="number">{number}</span>)}
                                    </div>
                                    <p className="label">sec</p>
                                </div>
                            </div>
                        )
                    }

                    <div className="timer-buttons">
                        <button className={`timer-button cancel-btn`} disabled={!isRunning} onClick={handleCancel}>Cancel</button>
                        {isRunning && <button className="timer-button pause-btn" onClick={handlePause}>Pause</button>}
                        {!isRunning && time > 0 && <button className="timer-button start-btn" onClick={handleResume}>Resume</button>}
                        {!isRunning && time === 0 && <button className="timer-button start-btn" onClick={handleStart} disabled={hours === 0 && minutes === 0 && seconds === 0}>Start</button>}
                    </div>
                    <div className="timer-alarm"></div>
                </div>
            </div>
        </div>
    )
}

export default Timer;