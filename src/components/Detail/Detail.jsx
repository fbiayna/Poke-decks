import React, { useState, useEffect } from 'react';
import cardsStore from '../../stores/store';
import './Detail.css'
import { loadCard } from '../../actions/action-creators';

function Detail(props) {
	debugger
	const [cardId] = useState(props.match.params.cardid);
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

	function rules() {
		if (Array.isArray(card?.card.text)) {
			return `Rules: ${card.card.text}`
		}
	}

	function pokedex() {
		if (card?.card.nationalPokedexNumber!==undefined) {
			return `Pokédex Number: #${card?.card.nationalPokedexNumber}`
		}
	}

	function pokemonHp() {
		if (card?.card.hp!==undefined) {
			return `HP: ${card?.card.hp}`
		}
	}

	function pokemonType() {
		if (card?.card.types!==undefined) {
			return card.card.types.map((type) => <li>Type: {type}</li>)
		}
	}

	function pokemonAttacks() {
		if (card?.card.attacks!==undefined) {
		return card.card.attacks.map((attack) => <li>{attack.name} | {attack.cost} | Damage: {attack.damage}<p>{attack.text}</p><p>Converted Energy Cost: {attack.convertedEnergyCost}</p></li>)
		}
	}

	function pokemonResist() {
		if (card?.card.resistances!==undefined) {
			return card.card.resistances.map((resist) => <li>Resistance: {resist.type} | {resist.value}</li>)
			}
	}

	function pokemonWeak() {
		if (card?.card.weaknesses!==undefined) {
			return card.card.weaknesses.map((weak) => <li>Weakness: {weak.type} | {weak.value}</li>)
			}
	}

	return (
		<>
			<div className="detail-container">
				<div className="detail-container__image">
					<img id="image__poke-card" alt="error" src={card?.card.imageUrlHiRes}></img>
				</div>
				<div className="detail-container__description">
					<div className="description__title">
						<h2>{card?.card.name}</h2>
						<p>{card?.card.supertype}</p>
						<p>{card?.card.subtype}</p>
					</div>
					<div className="description__set">
						<p>Set: {card?.card.set}</p>
						<p>Rarity: {card?.card.rarity}</p>
					</div>
					<div className="description__rules">
						<p>{rules()}</p>
					</div>
					<div className="description__pokemon">
						<p>{pokedex()}</p>
						<p>{pokemonHp()}</p>
						<ul>{pokemonType()}</ul>
						<ul>{pokemonAttacks()}</ul>
						<ul>{pokemonResist()}</ul>
						<ul>{pokemonWeak()}</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
