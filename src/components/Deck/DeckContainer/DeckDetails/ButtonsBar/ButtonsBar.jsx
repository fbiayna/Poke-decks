import React, { useState, useEffect } from 'react'
import { loadDecks } from '../../../../../actions/action-creators';
import cardsStore from '../../../../../stores/store';
import AddCards from './AddCards/AddCards';
import TotalCards from './TotalCards/TotalCards';

function ButtonsBar() {

    const [decks, setDecks] = useState(cardsStore.getDecks());

	function handleChange() {
		let moreDecks = cardsStore.getDecks();
		setDecks(moreDecks);
	}

	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		cardsStore.addEventListener(handleChange);

		if (!decks || !decks.length) {
			loadDecks();
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [decks]);
    
    return (
        <div className="decks__section__block-buttons deck__add-cards">
        <AddCards />
        <TotalCards cards={decks[0]?.cards}/>
    </div>

    )
}

export default ButtonsBar;