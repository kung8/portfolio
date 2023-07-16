import React, { useEffect, useState } from 'react';

export const MusicPlayer = ({ selectedSong, previousSong }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 0);
    }, [selectedSong]);

    const createAudioPlayer = (song) => (
        <audio id="selected-song" className="audio-control" controls autoPlay>
            <source src={song ? song : ''} type="audio/mp4" />
            <source src={song ? song : ''} type="audio/mp3" />
            <source src={song ? song : ''} type="audio/mpeg" />
            <source src={song ? song : ''} type="audio/m4a" />
            {/* 
                <p>Your browser does not support HTML5 audio, but you can download my music at <a href={download}>here</a></p> 
            */}
        </audio>
    )

    if (isLoading) {
        return createAudioPlayer(previousSong);
    }
    return (
        <div className="music-player">
            {selectedSong && createAudioPlayer(selectedSong)}
        </div>
    )
}