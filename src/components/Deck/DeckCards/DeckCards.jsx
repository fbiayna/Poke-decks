import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadDecks, removeCard } from '../../../actions/action-creators';
import cardsStore from '../../../stores/store';
import './DeckCards.css';

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
        <div className="decks__card-section">
            {(!decks || !decks.length) && <h1>You have no cards... add some to start playing!</h1>}
            {decks && decks.length > 0 &&
                decks[0]?.cards.map((card) => {
                    return (
                        <div className="deckCard__wrapper">
                            <Link to={`/detail/${card.id}`}>
                                <div class="deckCard__wrapper__container">
                                    <img src={card.imageUrlHiRes} alt={card.id} className="deckCard__image"/>
                                </div>
                            </Link>
                            <div className="deckard__wrapper__remove-button" onClick={() => removeCard(card.id)}>
                                <span>Remove</span>
                            </div>
                        </div>
                    )
                })
        }
        </div>
    )
}

export default DeckCards;