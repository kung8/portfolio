import { useState } from 'react';
import highestVolumeBtn from '../../Assets/highest-volume-btn.png';
import mediumVolumeBtn from '../../Assets/medium-volume-btn.png';
import lowestVolumeBtn from '../../Assets/lowest-volume-btn.png';
import mutedVolumeBtn from '../../Assets/muted-volume-btn.png';

export const VolumeControls = () => {
    const [volumeLevel, setVolumeLevel] = useState(100);
    const [showMuted, setShowMuted] = useState(false);

    const updateVolume = (e) => {
        const volumeBar = document.querySelector('.volume-container')?.getBoundingClientRect().left;
        const difference = e.clientX - volumeBar;
        document.querySelectorAll('.audio-control').forEach(audio => {
            if (difference >= 0 && difference < 100) {
                audio.volume = difference / 100;
                setVolumeLevel(difference);
            } else if (difference < 0) {
                audio.volume = 0;
                setVolumeLevel(0);
            } else if (difference > 100) {
                audio.volume = 1;
                setVolumeLevel(100);
            }
        });
    }

    const mute = () => {
        document.querySelectorAll('.audio-control').forEach(audio => {
            audio.volume = 0;
            setVolumeLevel(0);
            setShowMuted(true);
        });
    }

    const unmute = () => {
        document.querySelectorAll('.audio-control').forEach(audio => {
            audio.volume = 1;
            setVolumeLevel(100);
            setShowMuted(false)
        });
    }

    const getVolume = () => {
        if (showMuted) {
            return <img className="logo-btn volume-logo" src={mutedVolumeBtn} alt="muted volume" onClick={unmute} />;
        } else {
            if (volumeLevel >= 75) return <img className="logo-btn volume-logo" src={highestVolumeBtn} alt="highest volume" onClick={mute} />;
            else if (volumeLevel >= 33 && volumeLevel < 75) return <img className="logo-btn volume-logo" src={mediumVolumeBtn} alt="medium volume" onClick={mute} />
            else if (volumeLevel > 0 && volumeLevel < 33) return <img className="logo-btn volume-logo" src={lowestVolumeBtn} alt="lowest volume" onClick={mute} />
            else return <img className="logo-btn volume-logo" src={mutedVolumeBtn} alt="muted volume" onClick={unmute} />
        }
    }

    return (
        <>
            {getVolume()}
            <div className="volume-container" onClick={(e) => updateVolume(e)} onDrag={(e) => updateVolume(e)}>
                <div className="volume-bar" style={{ width: volumeLevel + 'px' }}></div>
                <div className="volume-peg" style={{ right: (100 - volumeLevel) + '%' }}></div>
            </div>
        </>
    )
}