import { useEffect, useState } from 'react';

import pauseLogo from '../../Assets/pause-btn.png';
import playLogo from '../../Assets/play-btn.png';
import closeBtn from '../../Assets/x.png';

const SongItem = ({
    song,
    selectedSong,
    playSelectedSong,
    pauseSelectedSong,
    continueSong,
    index,
    isPlaying,
}) => {
    const [hover, setHover] = useState(false);
    const isCurrent = isPlaying && selectedSong?.id === song.id;

    return (
        <div key={song.id} className={`song-list-item ${selectedSong?.id === song?.id ? 'selected-song' : ''}`}>
            <div className="song-number" onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}>
                {hover ? (
                    <img
                        src={isCurrent ? pauseLogo : playLogo}
                        alt={isCurrent ? "pause" : "play"}
                        className={`play-btn ${index > 9 ? 'double-digits' : 'single-digit'}`}
                        onClick={() => {
                            if (isCurrent) {
                                pauseSelectedSong(song);
                            } else if (selectedSong?.id === song.id) {
                                continueSong();
                            } else {
                                playSelectedSong(song);
                            }
                        }}
                    />
                ) : (
                    <span>{index + 1}</span>
                )}
            </div>
            <div className="song-details">
                <span className="song-name">{song.name}</span>
                <span className="artist-name">{song.artist}</span>
            </div>
        </div>
    )
}

export const QueueModal = ({
    songs,
    show,
    handleClose,
    selectedSong,
    playSelectedSong,
    pauseSelectedSong,
    continueSong,
    isPlaying
}) => {
    useEffect(() => {
        if (show) {
            document.querySelector('.queue-modal').classList.remove('opened');
            document.querySelector('.queue-modal').classList.remove('closed');
            setTimeout(() => {
                document.querySelector('.queue-modal').classList.add('opened');
            }, 50);
        }
    }, [show]);

    return (
        <div className="queue-modal">
            <div className='heading-container'>
                <h2>Queue</h2>
                <button className="close-btn">
                    <img src={closeBtn} alt="close" onClick={handleClose} />
                </button>
            </div>
            <div className="song-list-container">
                {songs.length ? songs.map((song, index) => (
                    <SongItem
                        key={index}
                        song={song}
                        index={index}
                        selectedSong={selectedSong}
                        playSelectedSong={playSelectedSong}
                        pauseSelectedSong={pauseSelectedSong}
                        isPlaying={isPlaying}
                        continueSong={continueSong}
                    />
                )) : (
                    <p>There aren't any songs in the queue.</p>
                )
                }
            </div>
        </div>
    )
}