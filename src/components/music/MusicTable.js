import React, { useState } from 'react';
import { reversedSongs } from './data';
import playLogo from '../../Assets/play-btn.png';
import pauseLogo from '../../Assets/pause-btn.png';
import documentLogo from '../../Assets/document.png';
import { LyricsModal } from './LyricsModal';

const MusicItem = ({ song, index, selectedSong, setSelectedSong, isPlaying, setIsPlaying, handleOverlay, setSelectedLyric }) => {
    const [hover, setHover] = useState(false);
    const url = selectedSong?.url;
    const isCurrent = url === song.url && isPlaying;

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
                        src={isCurrent ? pauseLogo : playLogo}
                        alt={isCurrent ? 'pause' : 'play'}
                        onClick={() => {
                            let audio = document.querySelector('.audio-control');

                            if (isCurrent) {
                                setIsPlaying(false);
                                if (audio) audio.pause();
                            } else if (url === song.url) {
                                setIsPlaying(true);
                                if (audio) {
                                    audio.play();
                                    audio.setAttribute('autoplay', 'true');
                                }
                            } else {
                                setIsPlaying(false);
                                setSelectedSong(song);
                                if (audio) {
                                    audio.pause();
                                    audio.load();
                                    audio.play();
                                    audio.setAttribute('autoplay', 'true');
                                }
                                setIsPlaying(true);
                            }
                        }}
                    />
                ) : (
                    <span className={`id-number ${url === song.url ? 'selected-song' : ''}`}>{index + 1}</span>
                )}
            </li>
            <li className={`song-name ${url === song.url ? 'selected-song' : ''}`}>{song.name}</li>
            <li className="added-at">{song.addedAt}</li>
            <li className="created-at">{song.createdAt}</li>
            <li className="time">{song.time}</li>
            <li className="lyrics">
                <img 
                    className="document-logo" 
                    src={documentLogo} 
                    alt="document" 
                    onClick={() => {
                        handleOverlay();
                        setSelectedLyric(song);
                    }} 
                />
            </li>
        </ul>
    )
}

export const MusicTable = ({ selectedSong, setSelectedSong, setPreviousSong, isPlaying, setIsPlaying }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLyric, setSelectedLyric] = useState(null);

    const handleOverlay = () => {
        setModalOpen(true);
        document.querySelector('.music-table-overlay').classList.add('show');
        document.querySelector('#root').style.height = '100vh';
        document.querySelector('#root').style.overflowY = 'hidden';
        document.querySelector('#root').style.position = 'relative';
    }

    const handleClose = () => {
        setModalOpen(false);
        document.querySelector('.lyrics-modal').classList.remove('closed');

        setTimeout(() => {
            document.querySelector('.music-table-overlay').classList.remove('show');
        }, 500);

        setTimeout(() => {
            document.querySelector('#root').style.height = 'unset';
            document.querySelector('#root').style.overflowY = 'unset';
            document.querySelector('#root').style.position = 'unset';
            document.querySelector('.lyrics-modal').classList.add('closed');
        }, 50);
    }

    return (
        <>
            <div className="music-table">
                <ul className="row row-labels">
                    <li className="id">#</li>
                    <li className="song-name">Song Name</li>
                    <li className="added-at">Added At</li>
                    <li className="created-at">Created At</li>
                    <li className="time">Time</li>
                    <li className="lyrics">Lyrics</li>
                </ul>
                {reversedSongs.map((song, index) => (
                    <MusicItem key={index} {...{ song, index, selectedSong, setSelectedSong, setPreviousSong, isPlaying, setIsPlaying, handleOverlay, setSelectedLyric }} />
                ))}
            </div>
            <div className="music-table-overlay" onClick={handleClose}></div>
            <LyricsModal
                show={modalOpen}
                handleClose={handleClose}
                selectedLyric={selectedLyric}
            />
        </>
    )
}