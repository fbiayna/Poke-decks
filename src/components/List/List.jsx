import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../stores/store';
import './List.css';
import { loadList, loadRandomCards } from '../../actions/action-creators';
import CardsList from './Cards-List/CardsList';

function List(params) {
	const [cards, setCards] = useState(null);
	const [cardName] = useState(params.location.search.split('=')[1]);

	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		cardsStore.addEventListener(onChange);

		if (cardName && !cards) {
			handleChange(loadList, cardName);
		} else if (!cards) {
			loadRandomCards();
		}

		return () => {
			cardsStore.removeEventListener(onChange);
		};
	}, [cards, cardName]);

	function handleChange(setValue, event) {
		setValue(event);
	}

	function onChange() {
		const pokemon = cardsStore.getCards();
		setCards(pokemon);
	}

	return (
		<div className="body-container">
			<div className="opacity"></div>
			<div className="search-container">
				<input
					type="text"
					name="searchBar"
					id="searchBar"
					placeholder="Gotta search 'em all!"
					onChange={(event) => handleChange(loadList, event.target.value)}
				/>
				<div className="search-container__buttons">
					<button id="button-back_search" onClick={() => cardsStore.goBack()}>
						<span class="material-icons">arrow_back</span>&nbsp;
						<span>Go Back</span>
					</button>
					<Link className="pokemon-card__text" id="pokemon_evolve" to="/decks">
						<button id="button-go-deck_search">
							<span class="material-icons">arrow_forward</span>&nbsp;
							<span>Go to Deck</span>
						</button>
					</Link>
				</div>
			</div>
			<CardsList cards={cards?.cards} />
		</div>
	);
}

export default List;
