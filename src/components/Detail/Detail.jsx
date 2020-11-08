import React, { useState, useEffect } from 'react';
import cardsStore from '../../stores/store';
import './Detail.css';
import { loadCard, loadDecks } from '../../actions/action-creators';
import LoadingGif from '../LoadingGif/LoadingGif';
import DetailContent from './DetailContent';

function Detail(props) {
	const [cardId] = useState(props.match?.params.cardid);
	const [card, setCard] = useState(null);
	const [decks, setDecks] = useState(cardsStore.getDecks());

	function handleChange() {
		setCard(cardsStore.getCard());
		setDecks(cardsStore.getDecks());
	}

	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		cardsStore.addEventListener(handleChange);

		if (!decks || decks.length < 1) {
			loadDecks();
		}

		if (card === null) {
			loadCard(cardId);
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [card, cardId, decks]);

	return (
		<>
			<div className="detailcard-container">
				<div className="opacity"></div>
				{!card ? (
					<LoadingGif cardSearchItems={card} />
				) : (
					<DetailContent card={card} decks={decks} />
				)}
			</div>
		</>
	);
}

export default Detail;
