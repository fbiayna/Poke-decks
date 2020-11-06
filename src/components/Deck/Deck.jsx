import React from 'react';
import DeckDetails from './DeckDetails/DeckDetails';
import DeckCards from './DeckCards/DeckCards';
import './Deck.css'

function Decks() {

    return (
        <div className="deck">
            <DeckDetails />
            <DeckCards />
        </div>
    )
}

export default Decks;