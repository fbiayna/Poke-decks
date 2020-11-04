import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardsStore from '../../stores/store';
import './Detail.css';
import { loadCard } from '../../actions/action-creators';

function Detail(props) {
	const [cardId] = useState(props.match.params.cardid);
	const [card, setCard] = useState([]);

	function handleChange() {
		setCard(cardsStore.getCard());
	}

	useEffect(() => {
		cardsStore.addEventListener(handleChange);

		if (Array.isArray(card)) {
			loadCard(cardId);
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [card, cardId]);

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
					<span className="pokemon-card__text">
						<span className="pokemon-card__title">Rarity</span> -{' '}
						{card.card?.rarity}
					</span>
				</>
			);
		}
	}

	function pokedex() {
		if (card.card?.nationalPokedexNumber !== undefined) {
			return (
				<>
					<p className="pokemon-card__text">
						<span className="pokemon-card__title">Pokédex Number</span> - #
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
				<span>
					<span className="pokemon-card__title">Evolves from</span>
					<Link
						className="pokemon-card__text"
						id="pokemon_evolve"
						to={`../cards/?name=${card?.card.evolvesFrom}`}
					>
						{` - ${card?.card.evolvesFrom}`}
					</Link>
				</span>
			);
		}
	}

	function pokemonType() {
		if (card.card?.types !== undefined) {
			return card.card.types.map((type) => (
				<p>
					<i className={`energy ${type}`}></i>
				</p>
			));
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
						{`Damage: ${attack.damage}`}
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
						<img
							id="image__poke-card"
							alt="error"
							src={card.card?.imageUrlHiRes}
						></img>
						<div className="image__button-add">
							<Link to="/decks">
								<button id="button-add__card">Add to Deck</button>
							</Link>
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
								<p>Set - {card.card?.set}</p>
								{cardRarity()}
							</div>
							<div className="pokemon__dex">
								{pokedex()}
								{pokemonEvolve()}
							</div>
						</div>
						<p>{ability()}</p>
						<p>{rules()}</p>
						<p>{pokemonAttacks()}</p>
						<div className="pokemon__other-type pokemon-card__description">
							{pokemonWeak()}
							{pokemonResist()}
							{pokemonRetreat()}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
