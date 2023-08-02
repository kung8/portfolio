import React from 'react';
import playBtn from '../../Assets/play-btn.png';
import pauseBtn from '../../Assets/pause-btn.png';
import previousBtn from '../../Assets/previous-btn.png';
import nextBtn from '../../Assets/next-btn.png';

import shuffleBtn from '../../Assets/shuffle-btn.png';
import repeatBtn from '../../Assets/repeat-btn.png';
import selectedShuffleBtn from '../../Assets/selected-shuffle-btn.png';
import selectedRepeatBtn from '../../Assets/selected-repeat-btn.png';
import { randomize } from '../../utils/randomize';
import { orderTypeMap, reversedSongs } from './data';


export const InteractionButtons = ({
    orderedSongs,
    setOrderedSongs,
    orderType,
    setOrderType,
    isPlaying,
    setIsPlaying,
    currentIndex,
    setSelectedSong,
    next, 
    play, 
    startSong
}) => {
    const pause = () => {
        setIsPlaying(false);
        const audio = document.querySelector('.audio-control');
        audio.pause();
    }

    const previous = () => {
        const previousIndex = currentIndex - 1;
        if (previousIndex < 0) return;
        setSelectedSong(orderedSongs[previousIndex]);
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

    return (
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
    )
};