import React, { useState, useEffect } from 'react';
import { loadCards } from '../actions/action-creators';
import cardsStore from '../stores/store';

function ListCards () {

    const [cards, setCards] = useState(null);
    debugger

    function handleChange() {
        setCards(cardsStore.getCards())
    }

    useEffect(() => {
        cardsStore.addEventListener(handleChange);
        if (!cards || !cards.length) {
            loadCards();
        }

        return () => {
            cardsStore.removeEventListener(handleChange);
        }
    }, [cards])

    return (
    <ul>{cards?.map((card) => <li>{card.id}</li>)}</ul>
    )
}

export default ListCards;