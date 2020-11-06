import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadDecks } from '../../../../actions/action-creators';
import cardsStore from '../../../../stores/store';
import LoadingGif from '../../../LoadingGif/LoadingGif';
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

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [decks]);

	return (
		<div id="image__cards-deck" className="deckSection__images">
			<Link className="title__link" to="/decks">
				<div className="images__title">
					<h2>MY DECK</h2>
					<p>
						It's time to create!<br></br>Customize your deck whatever you want
					</p>
				</div>
			</Link>
			<div className="images__cards">
				{!decks.length && <LoadingGif />}
				{decks.length && decks.map((deck) => (
					<Link to="/decks" key={`deck-${deck.title}`} className="MyDeck-Links">
						<div className="cardsSection__myDeck__deckBlock">
							<span className="cardsSection__myDeck__deckBlock__title">
								{deck.title}
							</span>
							<img src={deck.url} alt={deck.imagealt} />
						</div>
					</Link>
				))}
			</div>
			<div className="images__button-search">
			<Link id="images__button-search-button" to="/decks">
					<button id="button-search__cards-home">
						<span class="material-icons">style</span>&nbsp;
						<span>Create a Deck</span>
					</button>
				</Link>
				
			</div>
		</div>
	);
}

export default MyDecks;
