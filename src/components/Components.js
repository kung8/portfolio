import React from 'react';
import Bako from '../Assets/bako.jpg';
import playingCard from '../Assets/Components/8-of-hearts.png';
import guitar from '../Assets/Components/guitar.png';
import codeBreaker from '../Assets/Components/code-breaker.png';
import mancala from '../Assets/Components/mancala.png';
import sinker from '../Assets/Components/sinker.png';
import ticTacToe from '../Assets/Components/tic-tac-toe.png';


export default function Components() {
    return (
        <div className="components-page flex" style={{ backgroundImage: `url(${Bako})` }}>
            <div className="components-inner-container set-top p-rel">
                <h1>Components:</h1>
                <div className="components-container flex wrap">
                    <div className="card" style={{ backgroundImage: `url(${playingCard})` }}>
                        <h3 className="card-label">Playing Cards</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="card guitar" style={{ backgroundImage: `url(${guitar})` }}>
                        <h3 className="card-label">Guitar</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="card code-breaker" style={{ backgroundImage: `url(${codeBreaker})` }}>
                        <h3 className="card-label">Code Breaker</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="card mancala" style={{ backgroundImage: `url(${mancala})` }}>
                        <h3 className="card-label">Mancala</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="card sinker" style={{ backgroundImage: `url(${sinker})` }}>
                        <h3 className="card-label">Sinker</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="card" style={{ backgroundImage: `url(${ticTacToe})` }}>
                        <h3 className="card-label">Tic Tac Toe</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="card" style={{ backgroundImage: `url(${ticTacToe})` }}>
                        <h3 className="card-label">Battleship</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}