import React, { useEffect, useState } from 'react';
import { orderTypeMap, reversedSongs } from './data';
import { convertTimeToNumber } from '../../utils/time';
import { AudioPlayer, InteractionButtons, ProgressBar, Queue, VolumeControls } from '.';

const formatSongName = (name) => name.toLowerCase().replaceAll(' ', '-');

export const MusicPlayer = ({ selectedSong, setSelectedSong, isPlaying, setIsPlaying }) => {
    const [orderedSongs, setOrderedSongs] = useState([...reversedSongs]);
    const currentIndex = orderedSongs.findIndex(song => song.id === selectedSong?.id);
    const [orderType, setOrderType] = useState(orderTypeMap.none);
    const [currentTime, setCurrentTime] = useState(0);
    const [clickedSpot, setClickedSpot] = useState(null);

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

    const startSong = () => {
        const audio = document.querySelector('.audio-control');
        if (audio) {
            audio.pause();
            audio.load();
            audio.play();
            setIsPlaying(true);
        }
    }

    const play = () => {
        setIsPlaying(true);
        const audio = document.querySelector('.audio-control');
        audio.play();
    }

    const next = () => {
        const nextIndex = currentIndex + 1;
        const isRepeated = orderType === orderTypeMap.repeated;
        const isLast = orderedSongs.length - 1;
        if (nextIndex > isLast && !isRepeated) return;
        if (nextIndex - 1 === isLast && isRepeated) {
            setSelectedSong(orderedSongs[0]);
        } else {
            setSelectedSong(orderedSongs[nextIndex]);
        }
        startSong();
    }

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

    return (
        <>
            <div className="music-player">
                <div className="song-detail-container">
                    <span className="song-name">{selectedSong?.name}</span>
                    <span className="artist-name">{selectedSong?.artist}</span>
                </div>
                <div className="interactions-container">
                    <InteractionButtons
                        {...{
                            orderType,
                            setOrderType,
                            isPlaying,
                            setIsPlaying,
                            orderedSongs,
                            setOrderedSongs,
                            currentIndex,
                            setSelectedSong,
                            play,
                            startSong,
                            next,
                        }}
                    />
                    <ProgressBar
                        {...{
                            selectedSong,
                            currentTime,
                            setClickedSpot,
                            setCurrentTime,
                            setIsPlaying,
                            play,
                        }}
                    />
                </div>
                <div className="supplementary-interactions-container">
                    <Queue />
                    <VolumeControls />
                </div>
            </div>
            <AudioPlayer {...{
                songName: selectedSong?.name ? formatSongName(selectedSong?.name) : undefined,
                url: selectedSong?.url,
            }} />
        </>
    )
}

/* 
    TODO: add functionality for the queue to open up as a modal
*/