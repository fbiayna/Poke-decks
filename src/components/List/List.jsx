import React, { useState, useEffect } from 'react';
import cardsStore from '../../stores/store';
import './List.css';
import { loadList } from '../../actions/action-creators';

function List() {
	const [cards, setCards] = useState(null);

	function handleChange() {
		setCards(cardsStore.getCards());
	}

	useEffect(() => {
		cardsStore.addEventListener(handleChange);

		if (!cards) {
			loadList();
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [cards]);
	return (
		<>
			<ul>
				{cards?.cards.map((card) => (
					<li>{card.id}</li>
				))}
			</ul>
		</>
	);
}

export default List;
