import React, { useEffect, useState } from 'react';
import { Cursor } from '../Cursor';
import { MusicPlayer, MusicTable } from '.';

export const Music = ({ history }) => {
    const [selectedSong, setSelectedSong] = useState(null);
    const [previousSong, setPreviousSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const position = document.querySelector('.row-labels').getBoundingClientRect().top;
            console.log('position: ', position);
            if (position === 0) {
                document.querySelector('.row-labels').classList.add('sticky');
                document.querySelector('.music').classList.add('sticky');
            } else {
                document.querySelector('.row-labels').classList.remove('sticky');
                document.querySelector('.music').classList.remove('sticky');
            }
        })
    }, [])

    return (
        <div className='music page'>
            <div className="music-heading-container">
                <span className='back-btn' onClick={() => {
                    console.log('history: ', history);
                    history.push('/')}}>Back Home</span>
                <h1 className="music-heading">Music</h1>
            </div>
            <MusicTable {...{ selectedSong, setSelectedSong, setPreviousSong, isPlaying, setIsPlaying }} />
            <MusicPlayer {...{ selectedSong, previousSong, setIsPlaying }} />
            <Cursor />
        </div>
    )
}