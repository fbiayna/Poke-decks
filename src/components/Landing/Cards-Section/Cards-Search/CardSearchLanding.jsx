import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../../../stores/store';
import { loadRandomCards } from '../../../../actions/action-creators';
import './CardSearchLanding.css';

function CardSearchLanding() {
	const [cards, setCards] = useState(cardsStore.getRandomCards());

	function handleChange() {
		setCards(cardsStore.getRandomCards());
	}

	useEffect(() => {
		cardsStore.addEventListener(handleChange);

		if (!cards || !cards.length) {
			loadRandomCards();
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [cards]);

	return (
		<div className="cardSection__images">
			<Link className="title__link" to="/cards">
				<div className="images__title">
					<h2>SEARCH BY CARDS</h2>
					<p>
						Do you need information about any card?<br></br>Find it with
						Poke-Decks' search tool!
					</p>
				</div>
			</Link>
			<div className="images__cards">
				{cards?.map((card, index) => (
					<Link key={`detail-${card.name}`} to={`/detail/${card.id}`}>
						<img
							className="cards__png-info"
							id={`cards__png-info-${index}`}
							alt="error"
							src={card.imageUrl}
						/>
					</Link>
				))}
			</div>
			<div className="images__button-search">
				<Link to="/cards">
					<button id="button-search__cards-home">Find Cards</button>
				</Link>
			</div>
		</div>
	);
}

export default CardSearchLanding;
