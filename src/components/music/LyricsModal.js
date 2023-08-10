import React, { useEffect } from 'react';
import closeBtn from '../../Assets/x.png';
import KeepOnKeepingOn from '../Songs/KeepOnKeepingOn';
import SearchingForYou from '../Songs/SearchingForYou';
import FragileHeart from '../Songs/FragileHeart';
import Strong from '../Songs/Strong';
import TheGame from '../Songs/TheGame';
import HeroToMe from '../Songs/HeroToMe';
import ProdigalSon from '../Songs/ProdigalSon';
import Fearless from '../Songs/Fearless';

export const LyricsModal = ({
    show,
    handleClose,
    selectedLyric,
}) => {
    const getLyrics = () => {
        switch (selectedLyric?.id) {
            case 1:
                return <KeepOnKeepingOn />
            case 2:
                return <SearchingForYou />
            case 3:
                return <FragileHeart />
            case 4:
                return <Strong />
            case 5:
                return <TheGame />
            case 6:
                return <HeroToMe />
            case 7:
                return <ProdigalSon />;
            case 8:
                return <Fearless />;
            default:
                return <ProdigalSon />;
        }
    }

    useEffect(() => {
        if (show) {
            document.querySelector('.lyrics-modal').classList.remove('opened');
            document.querySelector('.lyrics-modal').classList.remove('closed');
            setTimeout(() => {
                document.querySelector('.lyrics-modal').classList.add('opened');
            }, 50);
        }
    }, [show]);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.lyrics-container').scrollTo({
                top: 0,
                // left: 0,
                behavior: 'smooth',
            })
        }, 100);
    }, [selectedLyric])

    return (
        <div className="lyrics-modal">
            <div className='heading-container'>
                <h2>{selectedLyric?.name}</h2>
                <button className="close-btn">
                    <img src={closeBtn} alt="close" onClick={handleClose} />
                </button>
            </div>
            <div className="lyrics-container">
                {getLyrics()}
            </div>
        </div>
    )
}