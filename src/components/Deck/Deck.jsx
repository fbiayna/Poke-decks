import React from 'react';
import DeckDetails from './DeckDetails/DeckDetails';
import DeckCards from './DeckCards/DeckCards';

function Decks() {

    
    return (
        <div className="decks__section">
            < DeckDetails />
            <DeckCards />
        </div>
    )
}

export default Decks;