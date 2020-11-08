import React, { useState, useEffect } from 'react';
import { loadDecks } from '../../../../../actions/action-creators';
import cardsStore from '../../../../../stores/store';
import PokemonStatistics from './Statistics/PokemonStatistics';
import EnergyStatistics from './Statistics/EnergyStatistics';
import TrainerStatistics from './Statistics/TrainerStatistics';

function DeckStatistics() {
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

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [decks]);
    
    return (
        <div className="decks__section__block__deck-statistics">
            <div className="decks__section__block__deck-statistics__text">
                <PokemonStatistics cards={decks[0]?.cards}/>
                <EnergyStatistics cards={decks[0]?.cards}/>
                <TrainerStatistics cards={decks[0]?.cards}/>
            </div>
        </div>

    );
}

export default DeckStatistics;