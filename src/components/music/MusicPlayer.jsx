import { useEffect, useMemo, useState } from 'react';

import queueBtn from '../../Assets/queue-btn.png';
import { useGetData } from '../../hooks';
import { convertTimeToNumber } from '../../utils/time';
import { AudioPlayer, InteractionButtons, ProgressBar, QueueModal, VolumeControls } from '.';
import { orderTypeMap } from './data';

const formatSongName = (name) => name.toLowerCase().replaceAll(' ', '-');

export const MusicPlayer = ({ selectedSong, setSelectedSong, isPlaying, setIsPlaying }) => {
    const { data: songs = [] } = useGetData('music');
    const [orderedSongs, setOrderedSongs] = useState([...songs]);
    const currentIndex = orderedSongs.findIndex(song => song.id === selectedSong?.id);
    const [orderType, setOrderType] = useState(orderTypeMap.none);
    const [currentTime, setCurrentTime] = useState(0);
    const [clickedSpot, setClickedSpot] = useState(null);
    const [queueOpen, setQueueOpen] = useState(false);

    useEffect(() => {
        setOrderedSongs([...songs]);
    }, [songs])

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
        setTimeout(() => {
            const audio = document.querySelector('.audio-control');
            if (audio) audio.play();
        }, 0);
    }

    const pause = () => {
        setIsPlaying(false);
        setTimeout(() => {
            const audio = document.querySelector('.audio-control');
            if (audio) audio.pause();
        }, 0);
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

        if (isFinished && isLastSong && !isRepeated) {
            setIsPlaying(false);
        }
        // eslint-disable-next-line
    }, [currentTime]);

    const handleOverlay = () => {
        setQueueOpen(true);
        document.querySelector('.music-player-overlay').classList.add('show');
        document.querySelector('#root').style.height = '100vh';
        document.querySelector('#root').style.overflowY = 'hidden';
        document.querySelector('#root').style.position = 'relative';
    }

    const handleClose = () => {
        setQueueOpen(false);
        document.querySelector('.queue-modal').classList.remove('closed');

        setTimeout(() => {
            document.querySelector('.music-player-overlay').classList.remove('show');
        }, 500);

        setTimeout(() => {
            document.querySelector('#root').style.height = 'unset';
            document.querySelector('#root').style.overflowY = 'unset';
            document.querySelector('#root').style.position = 'unset';
            document.querySelector('.queue-modal').classList.add('closed');
        }, 50);
    }

    const queuedSongs = useMemo(() => {
        if (orderType === orderTypeMap.repeated) return [...orderedSongs.slice(currentIndex + 1), ...orderedSongs];
        return [...orderedSongs.slice(currentIndex + 1)];
    }, [currentIndex, orderType, orderedSongs])

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
                            orderedSongs,
                            setOrderedSongs,
                            currentIndex,
                            setSelectedSong,
                            play,
                            pause,
                            startSong,
                            next,
                            currentTime,
                            setCurrentTime,
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
                    <img className="logo-btn queue-logo" src={queueBtn} alt="queue" onClick={handleOverlay} />
                    <VolumeControls />
                </div>
            </div>
            <AudioPlayer {...{
                songName: selectedSong?.name ? formatSongName(selectedSong?.name) : undefined,
                url: selectedSong?.url,
            }} />
            <div className="music-player-overlay" onClick={handleClose}></div>
            <QueueModal
                selectedSong={selectedSong}
                isPlaying={isPlaying}
                playSelectedSong={(song) => {
                    setSelectedSong(song);
                    startSong();
                    handleClose();
                }}
                pauseSelectedSong={() => {
                    setIsPlaying(false);
                    pause();
                    handleClose();
                }}
                continueSong={() => {
                    let audio = document.querySelector('.audio-control');
                    setIsPlaying(true);
                    if (audio) {
                        audio.play();
                        audio.setAttribute('autoplay', 'true');
                    }
                    handleClose();
                }}
                songs={queuedSongs}
                show={queueOpen}
                handleClose={handleClose}
            />
        </>
    )
}