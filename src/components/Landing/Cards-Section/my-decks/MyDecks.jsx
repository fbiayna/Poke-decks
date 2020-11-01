import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadDecks } from '../../../../actions/action-creators';
import cardsStore from '../../../../stores/store';
import './MyDecks.css';

function MyDecks() {

    const [decks, setDecks] = useState(cardsStore.getDecks());

    function handleChange() {
        setDecks(cardsStore.getDecks());
    }

    useEffect(() => {
        cardsStore.addEventListener(handleChange);

        if (!decks || decks.length < 1) {
            loadDecks();
        }

        return () => {cardsStore.removeEventListener(handleChange)}
    }, [decks]);

    return (    
            <div className="cardsSection__myDeck__block">
                <div className="cardsSection__myDeck__titleBlock">
                <span className="cardsSection__myDeck__title" id="title">MY DECKS</span>
                </div>
                <div className="cardsSection__myDeck">
                    {
                        decks.map((deck) => 
                        <Link to="/my-decks" className="MyDeck-Links">
                            <div className="cardsSection__myDeck__deckBlock">
                                <span className="cardsSection__myDeck__deckBlock__title">{deck.title}</span>
                                <img src={deck.url} alt={deck.imagealt}/>
                            </div>
                        </Link>
                        )
                    }
                </div>
            </div>
    );
}

export default MyDecks;