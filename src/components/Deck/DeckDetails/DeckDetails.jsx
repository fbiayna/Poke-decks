import React, { useEffect, useState}  from 'react';
import cardsStore from '../../stores/store';
import { loadDecks } from '../../'
import './DeckDetails.css';

function DeckDetails() {

    const [decks, setDecks] = useState(cardsStore.getDecks());

    function handleChange() {
        setDecks(cardsStore.getDecks());
    }

    useEffect(() => {
        cardsStore.addEventListener(handleChange);

        if (!decks.length) {
            loadDecks();
        }

        return () => { cardsStore.removeEventListener(handleChange) }
    }, [decks]);

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