import React, { useState } from 'react';
import { Cursor } from '../Cursor';
import { reversedSongs } from './data';
import { MusicPlayer, MusicTable } from '.';

export const Music = ({ history }) => {
    const [selectedSong, setSelectedSong] = useState(reversedSongs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         const position = document.querySelector('.row-labels').getBoundingClientRect().top;
    //         if (position === 0) {
    //             document.querySelector('.row-labels').classList.add('sticky');
    //             document.querySelector('.music').classList.add('sticky');
    //         } else {
    //             document.querySelector('.row-labels').classList.remove('sticky');
    //             document.querySelector('.music').classList.remove('sticky');
    //         }
    //     })
    // }, [])

    return (
        <div className='music page'>
            <div className="music-heading-container">
                <span className='back-btn' onClick={() => history.push('/')}>Back Home</span>
                <h1 className="music-heading">Music</h1>
            </div>
            <MusicTable {...{ selectedSong, setSelectedSong, isPlaying, setIsPlaying }} />
            <MusicPlayer {...{ selectedSong, setSelectedSong, isPlaying, setIsPlaying }} />
            <Cursor />
        </div>
    )
}