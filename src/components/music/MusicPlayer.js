import React, { useCallback, useEffect, useState } from 'react';
import playBtn from '../../Assets/play-btn.png';
import pauseBtn from '../../Assets/pause-btn.png';
import previousBtn from '../../Assets/previous-btn.png';
import nextBtn from '../../Assets/next-btn.png';

import shuffleBtn from '../../Assets/shuffle-btn.png';
import repeatBtn from '../../Assets/repeat-btn.png';
import selectedShuffleBtn from '../../Assets/selected-shuffle-btn.png';
import selectedRepeatBtn from '../../Assets/selected-repeat-btn.png';
import queueBtn from '../../Assets/queue-btn.png';
import highestVolumeBtn from '../../Assets/highest-volume-btn.png';
import mediumVolumeBtn from '../../Assets/medium-volume-btn.png';
import lowestVolumeBtn from '../../Assets/lowest-volume-btn.png';
import mutedVolumeBtn from '../../Assets/muted-volume-btn.png';

import { reversedSongs } from './data';
import { randomize } from '../../utils/randomize';
import { convertNumberToTime, convertTimeToNumber } from '../../utils/time';

const formatSongName = (name) => name.toLowerCase().replaceAll(' ', '-');

const orderTypeMap = {
    shuffled: 'shuffled',
    repeated: 'repeated',
    none: 'none'
};

export const MusicPlayer = ({ selectedSong, setSelectedSong, isPlaying, setIsPlaying }) => {
    const url = selectedSong?.url;
    const [orderedSongs, setOrderedSongs] = useState([...reversedSongs]);
    const songName = selectedSong?.name ? formatSongName(selectedSong?.name) : undefined;
    const currentIndex = orderedSongs.findIndex(song => song.id === selectedSong?.id);
    const [orderType, setOrderType] = useState(orderTypeMap.none);
    const [currentTime, setCurrentTime] = useState(0);
    const [clickedSpot, setClickedSpot] = useState(null);
    const [volumeLevel, setVolumeLevel] = useState(100);
    const [showMuted, setShowMuted] = useState(false);

    const pause = () => {
        setIsPlaying(false);
        const audio = document.querySelector('.audio-control');
        audio.pause();
    }

    const play = () => {
        setIsPlaying(true);
        const audio = document.querySelector('.audio-control');
        audio.play();
    }

    const startSong = () => {
        const audio = document.querySelector('.audio-control');
        if (audio) {
            audio.pause();
            audio.load();
            audio.play();
            setIsPlaying(true);
        }
    }

    const previous = () => {
        const previousIndex = currentIndex - 1;
        if (previousIndex < 0) return;
        setSelectedSong(orderedSongs[previousIndex]);
        startSong();
    }

    const next = () => {
        const nextIndex = currentIndex + 1;
        const isRepeated = orderType === orderTypeMap.repeated;
        const isLast = orderedSongs.length - 1;
        if (nextIndex > isLast && !isRepeated) return;
        if (nextIndex === isLast && isRepeated) {
            setSelectedSong(orderedSongs[0]);
        } else {
            setSelectedSong(orderedSongs[nextIndex]);
        }
        startSong();
    }

    const shuffle = () => {
        if (orderType === orderTypeMap.shuffled) {
            setOrderType(orderTypeMap.none);
            setOrderedSongs([...reversedSongs]);
        } else {
            setOrderedSongs([...randomize(orderedSongs)]);
            setOrderType(orderTypeMap.shuffled);
        }
    }

    const repeat = () => {
        if (orderType === orderTypeMap.repeated) {
            setOrderType(orderTypeMap.none);
        } else {
            setOrderType(orderTypeMap.repeated);
            setOrderedSongs([...reversedSongs]);
        }
    }

    const createAudioPlayer = useCallback(() => {
        return (
            songName ? (
                <audio hidden id={`selected-song-${songName}`} className="audio-control" controls>
                    <source src={url ? url : ''} type="audio/mp4" />
                    <source src={url ? url : ''} type="audio/mp3" />
                    <source src={url ? url : ''} type="audio/mpeg" />
                    <source src={url ? url : ''} type="audio/m4a" />
                    {/* <p>Your browser does not support HTML5 audio, but you can download my music at <a href={download}>here</a></p> */}
                </audio>
            ) : null
        )
        // eslint-disable-next-line
    }, [url]);

    useEffect(() => {
        let interval;
        if (clickedSpot) {
            interval = setInterval(() => {
                setCurrentTime(time => time + 1);
            }, 1000);
        } else {
            interval = setInterval(() => {
                setCurrentTime(document.querySelector('.audio-control')?.currentTime);
            }, 1000);
        }
        if (!isPlaying) clearInterval(interval);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [isPlaying, clickedSpot]);

    useEffect(() => {
        setCurrentTime(0);
        // eslint-disable-next-line
    }, [selectedSong]);

    useEffect(() => {
        const isFinished = currentTime >= convertTimeToNumber(selectedSong?.time);
        const isLastSong = currentIndex === orderedSongs.length - 1;
        const isRepeated = orderType === orderTypeMap.repeated;

        if (isFinished && !isLastSong) {
            next();
        }

        if (isFinished && isLastSong && isRepeated) {
            setSelectedSong(orderedSongs[0]);
            startSong();
        }
        // eslint-disable-next-line
    }, [currentTime]);

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

    const queue = () => {

    }

    const updateVolume = (e) => {
        const volumeBar = document.querySelector('.volume-container')?.getBoundingClientRect().left;
        const difference = e.clientX - volumeBar;
        document.querySelectorAll('.audio-control').forEach(audio => {
            if (difference >= 0 && difference < 100) {
                audio.volume = difference / 100;
                setVolumeLevel(difference);
            } else if (difference < 0) {
                audio.volume = 0;
                setVolumeLevel(0);
            } else if (difference > 100) {
                audio.volume = 1;
                setVolumeLevel(100);
            }
        });
    }

    const mute = () => {
        document.querySelectorAll('.audio-control').forEach(audio => {
            audio.volume = 0;
            setVolumeLevel(0);
            setShowMuted(true)
        });
    }

    const unmute = () => {
        document.querySelectorAll('.audio-control').forEach(audio => {
            audio.volume = 1;
            setVolumeLevel(100);
            setShowMuted(false)
        });
    }

    const getVolume = () => {
        if (showMuted) {
            return <img className="logo-btn volume-logo" src={mutedVolumeBtn} alt="muted volume" onClick={unmute} />;
        } else {
            if (volumeLevel >= 75) return <img className="logo-btn volume-logo" src={highestVolumeBtn} alt="highest volume" onClick={mute} />;
            else if (volumeLevel >= 33 && volumeLevel < 75) return <img className="logo-btn volume-logo" src={mediumVolumeBtn} alt="medium volume" onClick={mute} />
            else if (volumeLevel > 0 && volumeLevel < 33) return <img className="logo-btn volume-logo" src={lowestVolumeBtn} alt="lowest volume" onClick={mute} />
            else return <img className="logo-btn volume-logo" src={mutedVolumeBtn} alt="muted volume" onClick={unmute} />
        }
    }

    return (
        <>
            <div className="music-player">
                <div className="song-detail-container">
                    <span className="song-name">{selectedSong?.name}</span>
                    <span className="artist-name">Kevin Ung</span>
                </div>
                <div className="interactions-container">
                    <div className="icon-buttons-container">
                        {orderType === orderTypeMap.shuffled ? (
                            <img className="logo-btn shuffle-logo" src={selectedShuffleBtn} alt="shuffle" onClick={shuffle} />
                        ) : (
                            <img className="logo-btn shuffle-logo" src={shuffleBtn} alt="shuffle" onClick={shuffle} />
                        )}
                        <img className="logo-btn" src={previousBtn} alt="previous" onClick={previous} />
                        {isPlaying ?
                            <img className="logo-btn" src={pauseBtn} alt="pause" onClick={pause} />
                            :
                            <img className="logo-btn" src={playBtn} alt="play" onClick={play} />
                        }
                        <img className="logo-btn" src={nextBtn} alt="next" onClick={next} />
                        {orderType === orderTypeMap.repeated ? (
                            <img className="logo-btn repeat-logo" src={selectedRepeatBtn} alt="repeat" onClick={repeat} />
                        ) : (
                            <img className="logo-btn repeat-logo" src={repeatBtn} alt="repeat" onClick={repeat} />
                        )}
                    </div>
                    <div className="progress-bar-container">
                        <span className="progress-time">{convertNumberToTime(currentTime)}</span>
                        <div className="progress-bar" onClick={handleProgressBarClick}>
                            <div className="progress-bar-fill" style={{ width: (currentTime / (convertTimeToNumber(selectedSong?.time) || 1)) * 100 + '%' }}></div>
                            <div className="progress-peg" style={{ left: (currentTime / (convertTimeToNumber(selectedSong?.time) || 1)) * 100 + '%' }}></div>
                        </div>
                        <span className="progress-time">{selectedSong?.time}</span>
                    </div>
                </div>
                <div className="supplementary-interactions-container">
                    <img className="logo-btn queue-logo" src={queueBtn} alt="queue" onClick={queue} />
                    {getVolume()}
                    <div className="volume-container" onClick={(e) => updateVolume(e)} onDrag={(e) => updateVolume(e)}>
                        <div className="volume-bar" style={{ width: volumeLevel + 'px' }}></div>
                        <div className="volume-peg" style={{ right: (100 - volumeLevel) + '%' }}></div>
                    </div>
                </div>
            </div>
            {createAudioPlayer()}
        </>
    )
}

/* 
    TODO: add functionality for the queue to open up as a modal
*/