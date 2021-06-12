import React from 'react';
import Bako from '../Assets/bako.jpg';

export default function Components() {
    return (
        <div className="components-page flex" style={{ backgroundImage: `url(${Bako})` }}>
            <div className="components-inner-container set-top p-rel">
                <h1>Components:</h1>
                <div className="components-container flex wrap">
                    <div className="card">
                        <h3 className="card-label">Playing Cards</h3>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="card">
                        <h3 className="card-label">Guitar</h3>
                        <button className="learn-more">Learn More</button></div>
                    <div className="card">
                        <h3 className="card-label">Battleship</h3>
                        <button className="learn-more">Learn More</button></div>
                    <div className="card">
                        <h3 className="card-label">A</h3>
                        <button className="learn-more">Learn More</button></div>
                    <div className="card">
                        <h3 className="card-label">A</h3>
                        <button className="learn-more">Learn More</button></div>
                    <div className="card">
                        <h3 className="card-label">A</h3>
                        <button className="learn-more">Learn More</button></div>
                </div>
            </div>
        </div>
    )
} 