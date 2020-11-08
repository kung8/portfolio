import React, { useState, useEffect } from 'react';
import bako from '../assets/bako.jpg';
import KeepOnKeepingOn from './Songs/KeepOnKeepingOn';
import HeroToMe from './Songs/HeroToMe';
import TheGame from './Songs/TheGame';
import SearchingForYou from './Songs/SearchingForYou';
import ProdigalSon from './Songs/ProdigalSon';
import FragileHeart from './Songs/FragileHeart';
import Strong from './Songs/Strong';
import ChordModal from './ChordModal';

function Music() {
    const [selectedChord, updateSelectedChord] = useState(null);
    const [modalIsOpen, updateModalIsOpen] = useState(false);

    useEffect(() => {
        addModalClick();
    }, []);

    const addModalClick = () => {
        document.querySelectorAll('.music-cards .p-abs').forEach(chord => {
            chord.addEventListener('click', () => {
                updateSelectedChord(chord.innerText);
                updateModalIsOpen(true);
            });
        });
        document.querySelectorAll('.music-cards .ind-chord').forEach(chord => {
            chord.addEventListener('click', () => {
                updateSelectedChord(chord.innerText);
                updateModalIsOpen(true);
            });
        });
    }

    const closeModal = () => {
        updateSelectedChord(null);
        updateModalIsOpen(false);
    }

    return (
        <div className="music-page flex" style={{ backgroundImage: `url(${bako})` }}>
            <div className="music-inner-container flex-col justify-around set-top align-ctr">
                <h1>Music:</h1>
                <div className="music-cards">
                    <ProdigalSon />
                    <SearchingForYou />
                    <KeepOnKeepingOn />
                    <TheGame />
                    <HeroToMe />
                    <Strong />
                    <FragileHeart />
                </div>
                {modalIsOpen && <ChordModal selectedChord={selectedChord} closeModal={closeModal}/>}
            </div>
        </div>
    )
}

export default Music;
