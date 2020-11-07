import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadDecks } from '../../../actions/action-creators';
import cardsStore from '../../../stores/store';
import './DeckCards.css';

function DeckCards() {

    const [decks, setDecks] = useState(cardsStore.getDecks());

    function handleChange() {
        const decks = cardsStore.getDecks();
        setDecks(decks);
    }

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        cardsStore.addEventListener(handleChange);

        if (!decks || !decks.length) {
            loadDecks();
        }
            
        return () => { cardsStore.removeEventListener(handleChange) }
    }, [decks]);

    function removeCard(setValue, deletedCard) {
        debugger;
        let newDeck = [];
        let identicalCards = 0;
        decks[0].cards.map((card) => {
            if (card.id !== deletedCard.id || identicalCards > 0) {
                newDeck.push(card);
            } else {
                identicalCards++;
            }
        });
        decks[0].cards = newDeck;
        setValue(decks);
    }

    return (
        <div className="decks__card-section">
            {
                decks[0]?.cards.map((card) => {
                    return (
                        <>
                            <Link to={`/detail/${card.id}`}>
                                <div class="deckCard__container">
                                    <img src={card.imageUrlHiRes} alt={card.id} className="deckCard__image"/>
                                </div>
                            </Link>
                            <div className="deckard__remove-button" onClick={() => removeCard(setDecks, card)}>
                                <span>Remove</span>
                            </div>
                        </>
                    )
                })
        }
        </div>
    )
}

export default DeckCards;