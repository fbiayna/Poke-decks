import React from 'react';
import './DeckDetails.css';

function DeckDetails(props) {
    return (
        <>
            <div className="decks__section__block deck__details">
                <div className="decks__section__block__deck-description"></div>
                <div className="decks__section__block__deck-statistics"></div>
            </div>
            <div className="decks__section__block deck__add-cards">
                <div className="decks__section__block deck__add-cards__add-button"></div>
                <div className="decks__section__block deck__add-cards__total-cards"></div>
            </div>
        </>    

    );
}

export default DeckDetails();