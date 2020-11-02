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
			return (
				<div className="pokemon-card__description">
					<span>Rules</span>
					<p>{card.card.text}</p>
				</div>
			);
		}
	}

	function ability() {
		if (card.card?.ability !== undefined) {
			return (
				<div className="pokemon-card__description">
					<span>{card.card.ability.name}</span>
					<p>{card.card.ability.text}</p>
				</div>
			);
		}
	}

	function pokedex() {
		if (card.card?.nationalPokedexNumber !== undefined) {
			return `Pokédex Number - #${card?.card.nationalPokedexNumber}`;
		}
	}

	function pokemonHp() {
		if (card.card?.hp !== undefined) {
			return `${card.card.hp} HP`;
		}
	}

	function pokemonEvolve() {
		if (card.card?.evolvesFrom !== undefined) {
			return (
				<div>
					<span>Evolve from - </span>
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
				<div className="pokemon-card__description">
					{attack.cost.map((energy) => (
						<i className={`energy ${energy}`}></i>
					))}
					<span>
						{attack.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{attack.damage}
					</span>
					<p>{attack.text}</p>
				</div>
			));
		}
	}

	function pokemonResist() {
		if (card.card?.resistances !== undefined) {
			return (
				<div className="pokemon__resistance">
					<span>Resistances</span>
					<div>
						{card.card?.resistances.map((resist) => (
							<p>
								<i className={`energy ${resist.type}`}></i>
								<span>{resist.value}</span>
							</p>
						))}
					</div>
				</div>
			);
		}
	}

	function pokemonWeak() {
		if (card.card?.weaknesses !== undefined) {
			return (
				<div className="pokemon__weakness">
					<span>Weakness</span>
					<div>
						{card.card?.weaknesses.map((weak) => (
							<p>
								<i className={`energy ${weak.type}`}></i>
								<span>{weak.value}</span>
							</p>
						))}
					</div>
				</div>
			);
		}
	}

	function pokemonRetreat() {
		if (card.card?.retreatCost !== undefined) {
			return (
				<div className="pokemon__retreat">
					<span>Retreat Cost</span>
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
				<div className="opacity"></div>
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
						<p>Set - {card.card?.set}</p>
						<p>Rarity - {card.card?.rarity}</p>
					</div>
					<p>{ability()}</p>
					<p>{rules()}</p>
					<div className="description__pokemon">
						<div className="pokemon__dex">
							{pokedex()}
							{pokemonEvolve()}
						</div>
						<p>{pokemonAttacks()}</p>
						<div className="pokemon__other-type">
							{pokemonResist()}
							{pokemonWeak()}
							{pokemonRetreat()}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
