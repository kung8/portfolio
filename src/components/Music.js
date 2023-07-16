import React from 'react';
import { Cursor } from './Cursor';
import { music } from './dashboard';

export const Music = () => {
    return (
        <div className='music page'>
            <div className="music-heading-container">
                <h1 className="music-heading">Music</h1>
            </div>
            <div className="music-table">
                <ul className="row row-labels">
                    <li className="id">#</li>
                    <li className="song-name">Song Name</li>
                    <li className="added-at">Added At</li>
                    <li className="created-at">Created At</li>
                    <li className="time">Time</li>
                </ul>
                {music.reverse().map((song, index) => (
                    <ul key={index} className="row row-item">
                        <li className="id">{index + 1}</li>
                        <li className="song-name">{song.name}</li>
                        <li className="added-at">{song.addedAt}</li>
                        <li className="created-at">{song.createdAt}</li>
                        <li className="time">{song.time}</li>
                    </ul>
                ))}
            </div>
            <Cursor />
        </div>
    )
}