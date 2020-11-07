import React, { useEffect, useState } from 'react';
import cardsStore from '../../../stores/store';
import { loadDecks } from '../../../actions/action-creators';
import DeckStatistics from './DeckStatistics/DeckStatistics';
import ButtonsBar from './DeckStatistics/ButtonsBar/ButtonsBar';
import './DeckDetails.css';


function DeckDetails() {
	const [decks, setDecks] = useState(cardsStore.getDecks());
	const [title, setTitle] = useState(decks[0]?.title);
	const [description, setDescription] = useState(decks[0]?.description);

	function handleChange() {
		const decks = cardsStore.getDecks();
		setDecks(decks);
		setTitle(title);
		setDescription(description);
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

	function onChange(event, setValue, property) {
		setValue(event.target.value);
		decks[0][property] = event.target.value;
	}
    
	return (
		<div className="decks__section">
			<div className="decks__section__block deck__details">
				<div className="decks__section__block__deck-description">
					<input
						type="text"
						name="deck-title"
						id="name-title"
						autocomplete="off"
						value={decks[0]?.title}
						onChange={(event) => onChange(event, setTitle, 'title')}
					/>
					<textarea
						type="text"
						name="deck-description"
						id="name-description"
						autocomplete="off"
						value={decks[0]?.description}
						onChange={(event) => onChange(event, setTitle, 'description')}
						placeholder="Try to add a cool description to your Deck!"
					/>
				</div>
				<DeckStatistics />
			</div>
			<ButtonsBar />
		</div>

	);
}

export default DeckDetails;
