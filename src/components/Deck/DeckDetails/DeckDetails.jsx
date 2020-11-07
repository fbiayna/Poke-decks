import React, { useEffect, useState } from 'react';
import cardsStore from '../../../stores/store';
import { loadDecks } from '../../../actions/action-creators';
import './DeckDetails.css';
import { Link } from 'react-router-dom';
import TotalCards from './DeckStatistics/TotalCards';
import Statistics from './DeckStatistics/Statistics';
import TypeStatistics from './DeckStatistics/TypesStatistics';
import TrainerStatistics from './DeckStatistics/TrainerStatistics';
import EnergyStatistics from './DeckStatistics/EnergyStatistics';

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
					<input
						type="text"
						name="deck-description"
						id="name-description"
						autocomplete="off"
						value={decks[0]?.description}
						onChange={(event) => onChange(event, setTitle, 'description')}
						placeholder="Try to add a cool description to your Deck!"
					/>
				</div>
				<div className="decks__section__block__deck-statistics">
					<div className="decks__section__block__deck-statistics__text">
						<Statistics cards={decks[0]?.cards}/>
                        <TypeStatistics cards={decks[0]?.cards}/>
						<EnergyStatistics cards={decks[0]?.cards}/>
						<TrainerStatistics cards={decks[0]?.cards}/>
					</div>
				</div>
			</div>
			<div className="decks__section__block deck__add-cards">
				<Link className="header__links" to="/cards">
					<button id="button-search__cards-home">
						<span class="material-icons">recent_actors</span>&nbsp;
						<span>Find Cards</span>
					</button>
				</Link>
				<div className="decks__section__block__deck__add-cards__total-cards">
					<TotalCards cards={decks[0]?.cards} />
				</div>
			</div>
		</div>
	);
}

export default DeckDetails;
