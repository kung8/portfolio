import React, { useEffect, useMemo, useState } from 'react';
import playLogo from '../../Assets/play.png';
import stopLogo from '../../Assets/stop.png';
// import muteLogo from '../../Assets/mute.png';
// import soundLogo from '../../Assets/sound.png';
// import reverseLogo from '../../Assets/reverse.png';

const Camera = () => {
    const [streamStarted, setStreamStarted] = useState(false);
    const [isPlay, setIsPlay] = useState(true);
    // const [isSound, setIsSound] = useState(true);
    const [isFacingUser, setIsFacingUser] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const { video, constraints } = useMemo(() => {
        const video = document.querySelector('video');

        const constraints = {
            video: {
                width: {
                    min: 1280,
                    ideal: 1920,
                    max: 2560,
                },
                height: {
                    min: 720,
                    ideal: 1080,
                    max: 1440
                },
                facingMode: isFacingUser ? 'user' : 'environment',
            }
        };

        return {
            video,
            constraints
        }
        // eslint-disable-next-line
    }, [isFacingUser, isLoaded]);

    useEffect(() => {
        setIsLoaded(true);
    }, [])

    const handlePlay = async () => {
        if (streamStarted) {
            video.play();
            setIsPlay(false);
            return;
        }
        if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
            const updatedConstraints = {
                ...constraints,
            };
            const stream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
            video.srcObject = stream;
            setIsPlay(false);
            setStreamStarted(true);
        }
    }

    const handleStopVideo = async () => {
        if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
            const updatedConstraints = {
                ...constraints,
            };
            const stream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
            stream.getTracks().forEach((track) => {
                if (track.readyState === 'live' && track.kind === 'video') {
                    track.stop();
                }
            });
            video.srcObject = stream;
            setIsPlay(true);
            setStreamStarted(false);
        }
    }

    // const handleMute = async () => {
    //     if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
    //         const updatedConstraints = {
    //             ...constraints,
    //         };
    //         const stream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
    //         stream.getAudioTracks().forEach((track) => {
    //             if (track.readyState === 'live' && track.kind === 'audio') {
    //                 track.stop();
    //             }
    //         });
    //         video.srcObject = stream;
    //         setIsSound(false);
    //     }
    // }

    // const handleUnmute = async () => {
    //     if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
    //         const updatedConstraints = {
    //             ...constraints,
    //         };
    //         const stream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
    //         stream.getAudioTracks().forEach((track) => {
    //             if (track.readyState === 'live' && track.kind === 'audio') {
    //                 track.play();
    //             }
    //         });
    //         video.srcObject = stream;
    //         setIsSound(true);
    //     }
    // }

    // const handleReverse = () => {
    //     setIsFacingUser(!isFacingUser);
    // }

    const createControlBtn = ({ type, onClick, src }) => (
        <button className={`btn ${type}`} title={type} onClick={onClick}>
            <img src={src} className='control-img' alt={type} />
        </button>
    )

    return (
        <div className="camera-page">
            <div className="camera-container">
                <h1 className="heading">Camera</h1>
                <div className="display-cover">
                    <video autoPlay></video>
                    <div className="controls">
                        {isPlay ?
                            createControlBtn({ type: 'play', onClick: handlePlay, src: playLogo })
                            :
                            createControlBtn({ type: 'stop', onClick: handleStopVideo, src: stopLogo })
                        }
                        {/* {streamStarted && (isSound ?
                            createControlBtn({ type: 'mute', onClick: handleMute, src: muteLogo })
                            :
                            createControlBtn({ type: 'sound', onClick: handleUnmute, src: soundLogo })
                        )}
                        {streamStarted && createControlBtn({ type: 'reverse', onClick: handleReverse, src: reverseLogo })} */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Camera;