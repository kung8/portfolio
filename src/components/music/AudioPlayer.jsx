import { useCallback } from 'react';

export const AudioPlayer = ({ songName, url }) => {
    const createAudioPlayer = useCallback(() => {
        return (
            songName ? (
                <audio hidden id={`selected-song-${songName}`} className="audio-control" controls>
                    <source src={url ? url : ''} type="audio/mp4" />
                    <source src={url ? url : ''} type="audio/mp3" />
                    <source src={url ? url : ''} type="audio/mpeg" />
                    <source src={url ? url : ''} type="audio/m4a" />
                    {/* <p>Your browser does not support HTML5 audio, but you can download my music at <a href={download}>here</a></p> */}
                </audio>
            ) : null
        )
        // eslint-disable-next-line
    }, [url]);

    return createAudioPlayer();
}