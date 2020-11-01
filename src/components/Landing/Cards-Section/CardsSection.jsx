import React from 'react';
import './CardsSection.css';
import MyDecks from './my-decks/MyDecks';

function CardsSection() {
    return (
        <div className="landing__cards-section">
            <MyDecks />
        </div>
    );
}

export default CardsSection;