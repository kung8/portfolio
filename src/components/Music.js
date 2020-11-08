import React from 'react';
import bako from '../assets/bako.jpg';
import KeepOnKeepingOn from './Songs/KeepOnKeepingOn';
import HeroToMe from './Songs/HeroToMe';
import TheGame from './Songs/TheGame';
import SearchingForYou from './Songs/SearchingForYou';
import ProdigalSon from './Songs/ProdigalSon';
import FragileHeart from './Songs/FragileHeart';
import Strong from './Songs/Strong';

function Music() {
    return (
        <div className="music-page flex" style={{ backgroundImage: `url(${bako})` }}>
            <div className="music-inner-container justify-around set-top align-ctr">
                <h1>Music:</h1>
                <div className="music-cards">
                    <ProdigalSon />
                    <KeepOnKeepingOn />
                    <TheGame />
                    <SearchingForYou />
                    <HeroToMe />
                    <FragileHeart />
                    <Strong />
                </div>
            </div>
        </div>
    )
}

export default Music;
