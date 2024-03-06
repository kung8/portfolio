import React, { useState } from 'react';
import { Cursor } from '../Cursor';
import { MusicPlayer, MusicTable } from '.';
import { useGetData } from '../../hooks';

export const Music = ({ history }) => {
    const { data: songs = [] } = useGetData('music');
    const [selectedSong, setSelectedSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='music page'>
            <div className="heading-container">
                <span className='back-btn' onClick={() => history.push('/')}>Back Home</span>
                <h1 className="music-heading">Music</h1>
            </div>
            <MusicTable {...{ selectedSong, setSelectedSong, isPlaying, setIsPlaying }} />
            <MusicPlayer {...{ selectedSong, setSelectedSong, isPlaying, setIsPlaying }} />
            <Cursor />
        </div>
    )
}