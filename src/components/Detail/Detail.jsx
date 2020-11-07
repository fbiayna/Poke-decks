import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../stores/store';
import Ability from './CardDescription/Ability';
import Attacks from './CardDescription/Attacks';
import Evolve from './CardDescription/Evolve';
import Hp from './CardDescription/Hp';
import Pokedex from './CardDescription/Pokedex';
import Rarity from './CardDescription/Rarity';
import Resist from './CardDescription/Resist';
import Retreats from './CardDescription/Retreats';
import Rules from './CardDescription/Rules';
import Set from './CardDescription/Set';
import SuperType from './CardDescription/SuperType';
import Type from './CardDescription/Type';
import Weaks from './CardDescription/Weaks';
import './Detail.css';
import { loadCard, loadDecks } from '../../actions/action-creators';

function Detail(props) {
	const [cardId] = useState(props.match?.params.cardid);
	const [card, setCard] = useState([]);
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

		if (Array.isArray(card)) {
			loadCard(cardId);
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [card, cardId, decks]);

	function goBack() {
		window.history.back();
	}

	function addCard(decks, card) {
		return (
			<>
				{decks?.length > 0
					? decks[0].cards.length < 60
						? decks[0].cards.push(card.card) && alert('Added!')
						: alert('Your deck is full, check it and make some space!')
					: alert('There are no decks... Create one first!')}
			</>
		);
	}

	return (
		<>
			<div className="detailcard-container">
				<div className="opacity"></div>
				<div className="detailcard-container__image-block">
					<div className="detailcard-container__image">
						<div className="poke-card__wrapper">
							<img
								id={card.card?.id}
								alt={card.card?.id}
								src={card.card?.imageUrlHiRes}
								className="image__poke-card"
							></img>
						</div>
						<div className="image__button-add">
							<button id="button-back" onClick={() => goBack()}>
								<span class="material-icons">arrow_back</span>&nbsp;
								<span>Go Back</span>
							</button>
						</div>
					</div>
				</div>
				<div className="detailcard-container__description-block">
					<div className="detailcard-container__description">
						<div className="description__title">
							<h2>{card.card?.name}</h2>
							<SuperType
								types={{
									subType: card.card?.subtype,
									superType: card.card?.supertype
								}}
							/>
							<Hp hp={card.card?.hp} />
							<Type type={card.card?.types} />
						</div>
						<div className="description__set">
							<div className="pokemon__dex">
								<Set set={card.card?.set} />
								<Rarity rarity={card.card?.rarity} />
							</div>
							<div className="pokemon__dex">
								<Pokedex pokedex={card.card?.nationalPokedexNumber} />
								<Evolve evolve={card.card?.evolvesFrom} />
							</div>
						</div>
						<Ability ability={card.card?.ability} />
						<Rules rules={card.card?.text} />
						<Attacks attacks={card.card?.attacks} />
						<div className="pokemon__other-type pokemon-card__description">
							<Weaks weaks={card.card?.weaknesses} />
							<Resist resistances={card.card?.resistances} />
							<Retreats retreats={card.card?.retreatCost} />
						</div>
						<div className="detailcard-container__description-button">
							<button
								id="button-add__card"
								onClick={() => addCard(decks, card)}
							>
								<span class="material-icons">style</span>&nbsp;
								<span>Add to Deck</span>
							</button>
							<Link
								className="pokemon-card__text"
								id="pokemon_evolve"
								to="/decks"
							>
								<button id="button-go-deck">
									<span class="material-icons">arrow_forward</span>&nbsp;
									<span>Go to Deck</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
