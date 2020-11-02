import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../stores/store';
import './List.css';
import { loadList } from '../../actions/action-creators';

function List() {
	const [cards, setCards] = useState(cardsStore.getCards());

	useEffect(() => {
		debugger;
		cardsStore.addEventListener(onChange);

		/* REVISAR */
		if (!cards) {
			loadList();
		}

		return () => {
			cardsStore.removeEventListener(onChange);
		};
	}, [cards]);

	function handleChange(event, setValue) {
		setValue(event.target.value);
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
					onChange={(event) => handleChange(event, loadList)}
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
