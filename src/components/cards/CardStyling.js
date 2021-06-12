import React from 'react';

export default function CardStyling(props) {
    if (props.card) {
        return style(props.card);
    } else {
        return style(props);
    }
}

function style(card) {
    if (card.show) {
        let suit, color;
        if (card.suit === 'heart') {
            suit = "♥︎";
            color = 'red';
        } else if (card.suit === 'diamond') {
            suit = "♦︎";
            color = 'red';
        } else if (card.suit === 'spade') {
            suit = "♠︎";
            color = 'black';
        } else if (card.suit === 'club') {
            suit = "♣︎";
            color = 'black';
        }

        let suitRepeat;
        if (card.value === 10) {
            if (card.name === 'K') {
                suitRepeat = (
                    <div className="suits-container flex-col justify-center">
                        <span className="face-card" role="img" aria-label="king face card">🤴</span>
                    </div>
                )
            } else if (card.name === 'Q') {
                suitRepeat = (
                    <div className="suits-container flex-col justify-center">
                        <span className="face-card" role="img" aria-label="queen face card">👸</span>
                    </div>
                )
            } else if (card.name === 'J') {
                suitRepeat = (
                    <div className="suits-container flex-col justify-center">
                        <span className="face-card" role="img" aria-label="jack face card">👲</span>
                    </div>
                )
            } else if (card.name === 10) {
                suitRepeat = (
                    <div className="suits-container justify-around w-90-px">
                        <div className="flex-col justify-around">
                            <h3 className="center-suit" style={{ color }}>{suit}</h3>
                            <h3 className="center-suit" style={{ color }}>{suit}</h3>
                            <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                            <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        </div>
                        <div className="flex-col justify-around">
                            <h3 className="center-suit" style={{ color }}>{suit}</h3>
                            <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        </div>
                        <div className="flex-col justify-around">
                            <h3 className="center-suit" style={{ color }}>{suit}</h3>
                            <h3 className="center-suit" style={{ color }}>{suit}</h3>
                            <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                            <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        </div>
                    </div>
                )
            }
        } else if (card.value === 9) {
            suitRepeat = (
                <div className="suits-container justify-around w-90-px">
                    <div className="flex-col justify-evenly">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>
                    <div className="align-ctr">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>
                    <div className="flex-col justify-evenly">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>
                </div>)
        } else if (card.value === 8) {
            suitRepeat = (
                <div className="suits-container flex-col flex-ctr-around w-90-px">
                    <div className="justify-evenly w-120-px m-t-30">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>

                    <div>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>

                    <div className="justify-evenly w-120-px">
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>

                    <div>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>

                    <div className="justify-evenly w-120-px m-b-30">
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>
                </div>)
        } else if (card.value === 7) {
            suitRepeat = (
                <div className="suits-container flex-col justify-around w-120-px p-relative">
                    <div className="justify-evenly m-t-30">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>

                    <div className="align-ctr justify-center p-absolute" style={{ top: 70, left: 45 }}>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>
                    <div className="justify-evenly w-120-px">
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>

                    <div className="justify-evenly w-120-px m-b-30">
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>
                </div>
            )
        } else if (card.value === 6) {
            suitRepeat = (
                <div className="suits-container flex-col justify-around w-120-px">
                    <div className="justify-evenly w-120-px m-t-30">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>

                    <div className="justify-evenly w-120-px">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>

                    <div className="justify-evenly w-120-px m-b-30">
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>
                </div>
            )
        } else if (card.value === 5) {
            suitRepeat = (
                <div className="suits-container flex-col flex-ctr-around w-90-px">
                    <div className="justify-evenly w-120-px">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>
                    <div>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>
                    <div className="justify-evenly w-120-px">
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>
                </div>
            )
        } else if (card.value === 4) {
            suitRepeat = (
                <div className="suits-container flex-col justify-around w-120-px">
                    <div className="justify-evenly w-120-px m-t-30">
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    </div>
                    <div className="justify-evenly w-120-px m-b-30">
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                        <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                    </div>
                </div>
            )
        } else if (card.value === 3) {
            suitRepeat = (
                <div className="suits-container flex-col justify-evenly">
                    <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                </div>
            )
        } else if (card.value === 2) {
            suitRepeat = (
                <div className="suits-container flex-col justify-evenly">
                    <h3 className="center-suit" style={{ color }}>{suit}</h3>
                    <h3 className="center-suit suit-rotate" style={{ color }}>{suit}</h3>
                </div>
            )
        } else if (card.name === 'A') {
            suitRepeat = (
                <div className="suits-container flex-col justify-center">
                    <h3 className="ace" style={{ color }}>{suit}</h3>
                </div>
            )
        }

        return (
            <div className={`playing-card-holder ${card.class && card.class}`}>
                <div className="card-front-container" key={card.card_id}>
                    <div className="card-front-left-corner">
                        <h3 className="card-name" style={{ color }}>{card.name}</h3>
                        <h3 className="card-suit" style={{ color }}>{suit}</h3>
                    </div>

                    <div className="card-center-suits-container flex-col">
                        {suitRepeat}
                    </div>

                    <div className="card-front-right-corner">
                        <h3 className="card-suit" style={{ color }}>{suit}</h3>
                        <h3 className="card-name" style={{ color }}>{card.name}</h3>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`playing-card-holder ${card.class && card.class}`}>
                <div key={card.card_id} className="card-back-container">
                    <h3 className="card-back-logo">KU</h3>
                </div>
            </div>
        )
    }
}