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

    function onChange(setValue, event) {
        setValue(event);
    }

    return (
        <>
            <div className="decks__section__block deck__details">
                <div className="decks__section__block__deck-description">
                    <input type="text" name="deck-title" id="name-title" value={decks[0].title} onChange={(event)=>{onChange(loadDecks, event.target.value)}}/>
                    <input type="text" name="deck-description" id="name-description" value={decks[0].description} onChange={(event)=>{onChange(loadDecks, event.target.value)}}/>
                </div>
                <div className="decks__section__block__deck-statistics">
                    <span>TEXTOOOOOOOO</span>
                    <span>TEXTOOOOOOOO</span>
                    <span>TEXTOOOOOOOO</span>
                    <span>TEXTOOOOOOOO</span>
                    <span>TEXTOOOOOOOO</span>
                </div>
            </div>
            <div className="decks__section__block deck__add-cards">
                <div className="decks__section__block__deck__add-cards__add-button">
                    <span>ADD CARDS</span>
                </div>
                <div className="decks__section__block__deck__add-cards__total-cards">
                    <span>0/60 CARDS</span>
                </div>
            </div>
        </>    

    );
}

export default DeckDetails();