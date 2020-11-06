import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../stores/store';
import './Detail.css';
import { loadCard, loadDecks } from '../../actions/action-creators';

function Detail(props) {

	const [cardId] = useState(props.match.params.cardid);
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

	function addCardToDeck(card) {
		if (decks) {
			if (decks.length > 0) {
				if (decks[0].cards.length < 60) {
					decks[0].cards.push(card);
					alert('Added!');
					console.log(`deck: ${decks}`);
				} else {
					alert('Your deck is full, check it and make some space!');
				}
			}
		} else alert('There are no decks... Create one first!');
	}

	function rules() {
		if (Array.isArray(card.card?.text)) {
			return (
				<div className="pokemon-card__description">
					<p className="pokemon-card__title">Rules</p>
					<p className="pokemon-card__text">{card.card.text}</p>
				</div>
			);
		}
	}

	function ability() {
		if (card.card?.ability !== undefined) {
			return (
				<div className="pokemon-card__description">
					<p className="pokemon-card__title">{`Ability - ${card.card.ability.name}`}</p>
					<p className="pokemon-card__text">{card.card.ability.text}</p>
				</div>
			);
		}
	}

	function cardRarity() {
		if (card.card?.rarity !== undefined) {
			return (
				<>
					<p className="pokemon-card__text  pokemon-evolve__container">
						<span className="pokemon-card__title">Rarity</span>
						{card.card?.rarity}
					</p>
				</>
			);
		}
	}

	function cardSet() {
		if (card.card?.set !== undefined) {
			return (
				<>
					<p className="pokemon-card__text pokemon-evolve__container">
						<span className="pokemon-card__title">Set</span>
						{card?.card.set}
					</p>
				</>
			);
		}
	}

	function pokedex() {
		if (card.card?.nationalPokedexNumber !== undefined) {
			return (
				<>
					<p className="pokemon-card__text pokemon-evolve__container">
						<span className="pokemon-card__title">Pokédex Number</span>#
						{card?.card.nationalPokedexNumber}
					</p>
				</>
			);
		}
	}

	function pokemonHp() {
		if (card.card?.hp !== undefined) {
			return <p className="pokemon-card__text">{card.card.hp} HP</p>;
		}
	}

	function pokemonEvolve() {
		if (card.card?.evolvesFrom !== undefined) {
			return (
				<p className="pokemon-evolve__container">
					<span className="pokemon-card__title">Evolves from</span>
					<Link
						className="pokemon-card__text"
						id="pokemon_evolve"
						to={`../cards/?name=${card?.card.evolvesFrom}`}
					>
						<button id="button-evolve">{card?.card.evolvesFrom}</button>
					</Link>
				</p>
			);
		}
	}

	function pokemonType() {
		if (card.card?.types !== undefined) {
			return (
				<p>
					{card.card.types.map((type) => (
						<i className={`energy ${type}`}></i>
					))}
				</p>
			);
		}
	}

	function pokemonAttacks() {
		if (card.card?.attacks !== undefined) {
			return card.card.attacks.map((attack, index) => (
				<div className="pokemon-card__description">
					<p className="pokemon-card__title">
						{attack.cost.map((energy) => (
							<i className={`energy ${energy}`}></i>
						))}
						{` Attack #${index + 1} - ${attack.name}`}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{attack.damage ? `Damage - ${attack.damage}` : ''}
					</p>
					<p className="pokemon-card__text">{attack.text}</p>
				</div>
			));
		}
	}

	function pokemonResist() {
		if (card.card?.resistances !== undefined) {
			return (
				<p>
					<div className="pokemon__resistance">
						<span className="pokemon-card__title">Resistances</span>
						<div className="pokemon-element__icons">
							{card.card?.resistances.map((resist) => (
								<p className="pokemon-card__text">
									<i className={`energy ${resist.type}`}></i>
									<span>{resist.value}</span>
								</p>
							))}
						</div>
					</div>
				</p>
			);
		}
	}

	function pokemonWeak() {
		if (card.card?.weaknesses !== undefined) {
			return (
				<p>
					<div className="pokemon__weakness">
						<span className="pokemon-card__title">Weakness</span>
						<div className="pokemon-element__icons">
							{card.card?.weaknesses.map((weak) => (
								<p className="pokemon-card__text">
									<i className={`energy ${weak.type}`}></i>
									<span>{weak.value}</span>
								</p>
							))}
						</div>
					</div>
				</p>
			);
		}
	}

	function pokemonRetreat() {
		if (card.card?.retreatCost !== undefined) {
			return (
				<p>
					<div className="pokemon__retreat">
						<span className="pokemon-card__title">Retreat Cost</span>
						<div className="pokemon-element__icons">
							<p className="pokemon-card__text">
								{card.card.retreatCost.map((retreat) => (
									<i className={`energy ${retreat}`}></i>
								))}
							</p>
						</div>
					</div>
				</p>
			);
		}
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
								alt="pokemon-card"
								src={card.card?.imageUrlHiRes}
								className="image__poke-card"
							></img>
						</div>
						<div className="image__button-add">
							<button id="button-back" onClick={() => window.history.back()}>
								<span class="material-icons">arrow_back</span>&nbsp;
								<span>Back</span>
							</button>
						</div>
					</div>
				</div>
				<div className="detailcard-container__description-block">
					<div className="detailcard-container__description">
						<div className="description__title">
							<h2>{card.card?.name}</h2>
							<p>
								{card.card?.supertype}
								{` - ${card.card?.subtype}`}
							</p>
							{pokemonHp()}
							{pokemonType()}
						</div>
						<div className="description__set">
							<div className="pokemon__dex">
								{cardSet()}
								{cardRarity()}
							</div>
							<div className="pokemon__dex">
								{pokedex()}
								{pokemonEvolve()}
							</div>
						</div>
						{ability()}
						{rules()}
						{pokemonAttacks()}
						<div className="pokemon__other-type pokemon-card__description">
							{pokemonWeak()}
							{pokemonResist()}
							{pokemonRetreat()}
						</div>
						<div className="detailcard-container__description-button">
							<button id="button-add__card" onClick={() => addCardToDeck(card)}>
								<span className="material-icons">shopping_cart</span>&nbsp;
								<span>Add to Deck</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
