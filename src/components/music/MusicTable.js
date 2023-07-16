import React, { useState } from 'react';
import { music } from './data';
import playLogo from '../../assets/play-btn.png';

const MusicItem = ({ song, index, selectedSong, setSelectedSong, setPreviousSong }) => {
    const [hover, setHover] = useState(false);
    return (
        <ul
            key={index}
            className="row row-item"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <li className="id">
                {hover ? (
                    <img
                        className={`play-btn ${index > 9 ? 'double-digits' : 'single-digit'}`}
                        src={playLogo}
                        alt="play"
                        onClick={() => {
                            const previousSong = selectedSong;
                            if (selectedSong !== song.url) {
                                setPreviousSong(previousSong);
                                setSelectedSong(song.url)
                            }
                        }}
                    />
                ) : (
                    <span className={`id-number ${selectedSong === song.url ? 'selected-song' : ''}`}>{index + 1}</span>
                )}
            </li>
            <li className={`song-name ${selectedSong === song.url ? 'selected-song' : ''}`}>{song.name}</li>
            <li className="added-at">{song.addedAt}</li>
            <li className="created-at">{song.createdAt}</li>
            <li className="time">{song.time}</li>
        </ul>
    )
}

const sortedMusic = music.reverse();

export const MusicTable = ({ selectedSong, setSelectedSong, setPreviousSong }) => (
    <div className="music-table">
        <ul className="row row-labels">
            <li className="id">#</li>
            <li className="song-name">Song Name</li>
            <li className="added-at">Added At</li>
            <li className="created-at">Created At</li>
            <li className="time">Time</li>
        </ul>
        {sortedMusic.map((song, index) => (
            <MusicItem key={index} {...{ song, index, selectedSong, setSelectedSong, setPreviousSong }} />
        ))}
    </div>
)