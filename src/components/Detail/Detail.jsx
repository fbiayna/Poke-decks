import React, { useState, useEffect } from 'react';
import cardsStore from '../../stores/store';
import { loadCard } from '../../actions/action-creators';

function Detail(props) {
	const [cardId] = useState(props.match.params.cardId);
	const [card, setCard] = useState(null);

	function handleChange() {
		setCard(cardsStore.getCard());
	}

	useEffect(() => {
		cardsStore.addEventListener(handleChange);

		if (!card) {
			loadCard(cardId);
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [card, cardId]);

	return (
		<>
			<h1>
				<span>{card.name}</span> card detail
			</h1>
		</>
	);
}

export default Detail;
