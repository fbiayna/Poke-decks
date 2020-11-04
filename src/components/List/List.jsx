import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../stores/store';
import './List.css';
import { loadList, loadRandomCards } from '../../actions/action-creators';

function List(params) {

	const [cards, setCards] = useState(null);
	const [cardName] = useState(params.location.search.split('=')[1])

	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		cardsStore.addEventListener(onChange);

		if (cardName && !cards) {
			handleChange(loadList, cardName)
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
					placeholder="search for a card"
					onChange={(event) => handleChange(loadList, event.target.value)}
				/>
			</div>
			<ul className="card-gallery">
				{cards?.cards.map((card) => (
					<li>
						<Link to={`/detail/${card.id}`}>
							<div class="pokemonCard__container">
								<img src={card.imageUrl} alt={card.id} className="pokemonCard__image"/>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default List;
