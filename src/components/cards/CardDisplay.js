import React, { useState } from 'react';
import Card from './CreatingCard';
import cardsArr from './Cards';
import clonedeep from 'lodash.clonedeep';

function CardsDisplay() {
    const [cards, updateCards] = useState(cardsArr);

    const shuffle = async () => {
        const copy = clonedeep(cards);
        for (var i = copy.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        updateCards(copy);
    }

    const backToTop = async () => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: 'smooth'
        });
    }

    const mappedCards = cards.map(card => {
        card.show = true;
        card.class = null;
        return (
            <Card key={card.card_id} card={card} />
        )
    })

    return (
        <div className="card-display-container">
            <div className="card-display-holder">
                <button className="shuffle-btn" onClick={shuffle}>Shuffle</button>
                <div className="flex-wrap max-w-90-percent card-list">
                    {mappedCards}
                </div>
                <button className="back-to-top-btn" onClick={backToTop}>Back to Top</button>
            </div>
        </div>
    )
}

export default CardsDisplay;