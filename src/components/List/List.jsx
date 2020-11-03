import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../stores/store';
import './List.css';
import { loadList, loadCards } from '../../actions/action-creators';

function List(params) {
	const [cards, setCards] = useState(null);
	const [cardName] = useState(params.location.search.split('=')[1])

	useEffect(() => {

		cardsStore.addEventListener(onChange);

		if (cardName && !cards) {
			handleChange(loadList, cardName)
		} else if (!cards) {
			handleChange(loadCards);
		}

		return () => {
			cardsStore.removeEventListener(onChange);
		};
	}, [cards, cardName]);

	function handleChange(setValue, ...event) {
		debugger
		setValue(event);
	}

	function onChange() {
		const pokemon = cardsStore.getCards();
		setCards(pokemon);
	}

	return (
		<div className="body-container">
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
							<img src={card.imageUrl} alt={card.id} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default List;
