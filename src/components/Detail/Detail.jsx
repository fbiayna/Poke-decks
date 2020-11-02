import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import cardsStore from '../../stores/store';
import './Detail.css';
import { loadCard } from '../../actions/action-creators';

function Detail(props) {
	const [cardId] = useState(props.match.params.cardid);
	const [card, setCard] = useState(cardsStore.getCard());

	function handleChange() {
		setCard(cardsStore.getCard());
	}

	useEffect(() => {
		cardsStore.addEventListener(handleChange);

		if (!card || !card.length) {
			loadCard(cardId);
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
		};
	}, [card, cardId]);

	function rules() {
		if (Array.isArray(card.card?.text)) {
			return `Rules: ${card.card.text}`;
		}
	}

	function pokedex() {
		if (card.card?.nationalPokedexNumber !== undefined) {
			return `Pokédex Number: #${card?.card.nationalPokedexNumber}`;
		}
	}

	function pokemonHp() {
		if (card.card?.hp !== undefined) {
			return `HP ${card.card.hp}`;
		}
	}

	function pokemonEvolve() {
		if (card.card?.evolvesFrom !== undefined) {
			return (
				<div>
					<span>Evolve from: </span>
					<Link to={`../cards/?name=${card?.card.evolvesFrom}`}><span>{card?.card.evolvesFrom}</span></Link>
				</div>
			)
		}
	}

	function pokemonType() {
		if (card.card?.types !== undefined) {
			return card.card.types.map((type) => (
				<i className={`energy ${type}`}></i>
			));
		}
	}

	function pokemonAttacks() {
		if (card.card?.attacks !== undefined) {
			return card.card.attacks.map((attack) => (
				<li>
					{attack.cost.map((energy) => (
						<i className={`energy ${energy}`}></i>
					))}
					<span>
						{attack.name} | {attack.damage}
					</span>
					<p>{attack.text}</p>
					<p>Converted Energy Cost: {attack.convertedEnergyCost}</p>
				</li>
			));
		}
	}

	function pokemonResist() {
		if (card.card?.resistances !== undefined) {
			return (
				<div className="pokemon__resistance">
					<span>Resistances: </span>
					<p>
						{card.card?.resistance.map((resist) => (
							<span>
								<i className={`energy ${resist.type}`}></i>
								<span>{resist.value}</span>
							</span>
						))}
					</p>
				</div>
			);
		}
	}

	function pokemonWeak() {
		if (card.card?.weaknesses !== undefined) {
			return (
				<div className="pokemon__weakness">
					<span>Weakness: </span>
					<p>
						{card.card?.weaknesses.map((weak) => (
							<span>
								<i className={`energy ${weak.type}`}></i>
								<span>{weak.value}</span>
							</span>
						))}
					</p>
				</div>
			);
		}
	}

	function pokemonRetreat() {
		if (card.card?.retreatCost !== undefined) {
			return (
				<div className="pokemon__retreat">
					<span>Retreat Cost: </span>
					<p>
						{card.card.retreatCost.map((retreat) => (
							<i className={`energy ${retreat}`}></i>
						))}
					</p>
				</div>
			);
		}
	}

	return (
		<>
			<div className="detailcard-container">
				<div className="detailcard-container__image">
					<img
						id="image__poke-card"
						alt="error"
						src={card.card?.imageUrlHiRes}
					></img>
				</div>
				<div className="detailcard-container__description">
					<div className="description__title">
						<h2>{card.card?.name}</h2>
						<p>{card.card?.supertype}{` - ${card.card?.subtype}`}</p>
						<p>{pokemonHp()}</p>
						<p>{pokemonType()}</p>
					</div>
					<div className="description__set">
						<p>Set: {card.card?.set}</p>
						<p>Rarity: {card.card?.rarity}</p>
					</div>
					<div className="description__rules">
						<p>{rules()}</p>
					</div>
					<div className="description__pokemon">
						<p>{pokedex()}</p>
						<p>{pokemonEvolve()}</p>
						<ul>{pokemonAttacks()}</ul>
						<div className="pokemon__other-type">
							<span>{pokemonResist()}</span>
							<span>{pokemonWeak()}</span>
							<span>{pokemonRetreat()}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
