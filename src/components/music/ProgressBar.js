import React from 'react';
import { convertNumberToTime, convertTimeToNumber } from '../../utils/time';

export const ProgressBar = ({
    selectedSong,
    currentTime,
    setClickedSpot,
    setCurrentTime,
    setIsPlaying,
    play,
}) => {
    const handleProgressBarClick = (e) => {
        const clientPosition = e.clientX;
        setClickedSpot(clientPosition);
        const progressBarPosition = document.querySelector('.progress-bar').getBoundingClientRect().left;
        const difference = clientPosition - progressBarPosition;
        let percentage = 0;

        if (window.innerWidth < 600) {
            percentage = (difference / 200);
        } else {
            percentage = (difference / 250);
        }

        const newCurrentTime = percentage * convertTimeToNumber(selectedSong?.time) || 0;
        setCurrentTime(newCurrentTime);
        document.querySelectorAll('.audio-control').forEach(audio => audio.currentTime = newCurrentTime);
        setIsPlaying(true);
        play();
    }

    return (
        <div className="progress-bar-container">
            <span className="progress-time">{convertNumberToTime(currentTime)}</span>
            <div className="progress-bar" onClick={handleProgressBarClick}>
                <div className="progress-bar-fill" style={{ width: (currentTime / (convertTimeToNumber(selectedSong?.time) || 1)) * 100 + '%' }}></div>
                <div className="progress-peg" style={{ left: (currentTime / (convertTimeToNumber(selectedSong?.time) || 1)) * 100 + '%' }}></div>
            </div>
            <span className="progress-time">{selectedSong?.time}</span>
        </div>
    )
}