import React, { useEffect, useState } from 'react';
import { loadDecks } from '../../../../actions/action-creators';
import cardsStore from '../../../../stores/store';
import './DeckCards.css';
import DeckCardsContainer from './DeckCardsContainer/DeckCardsContainer';

function DeckCards() {

    const [decks, setDecks] = useState(cardsStore.getDecks());

    function handleChange() {
        setDecks(cardsStore.getDecks());
    }

    useEffect(() => {
        cardsStore.addEventListener(handleChange);

        if (!decks || !decks.length) {
            loadDecks();
        }
            
        return () => { cardsStore.removeEventListener(handleChange) };
    }, [decks]);

    return (
        <DeckCardsContainer decks={decks}/>
    )
}

export default DeckCards;