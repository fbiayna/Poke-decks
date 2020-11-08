import axios from 'axios';
import actionTypes from './actionTypes';
import dispatcher from '../dispatcher/dispatcher';

export async function loadCards() {
	try {
		let randomPage = Math.floor(Math.random() * 3000);

		const cards = await axios(
			`https://api.pokemontcg.io/v1/cards?page=${randomPage}&pageSize=3`
		);

		dispatcher.dispatch({
			type: actionTypes.LOAD_CARDS,
			payload: cards.data
		});
	} catch (error) {
		let threeRandomCardsToShow = { data: { cards: [] } };
		let totalOfCards = await axios('/api/pokemon.json');
		for (let i = 0; i < 3; i++) {
			let randomCard = Math.floor(
				Math.random() * totalOfCards.data.cards.length
			);
			threeRandomCardsToShow.data.cards.push(
				totalOfCards.data.cards[randomCard]
			);
		}

		dispatcher.dispatch({
			type: actionTypes.LOAD_CARDS,
			payload: threeRandomCardsToShow.data
		});
	}
}

export async function loadRandomCards() {
	try {
		let randomPage = Math.floor(Math.random() * 250);

		const cards = await axios(
			`https://api.pokemontcg.io/v1/cards?page=${randomPage}&pageSize=50`
		);

		dispatcher.dispatch({
			type: actionTypes.LOAD_RANDOM_CARDS,
			payload: cards.data
		});
	} catch (error) {
		let fiftyRandomCardsToShow = { data: { cards: [] } };
		let totalOfCards = await axios('/api/pokemon.json');
		for (let i = 0; i < 50; i++) {
			let randomCard = Math.floor(
				Math.random() * totalOfCards.data.cards.length
			);
			fiftyRandomCardsToShow.data.cards.push(
				totalOfCards.data.cards[randomCard]
			);
		}

		dispatcher.dispatch({
			type: actionTypes.LOAD_RANDOM_CARDS,
			payload: fiftyRandomCardsToShow.data
		});
	}
}

export async function loadCard(cardId) {
	try {
		const card = await axios(`https://api.pokemontcg.io/v1/cards/${cardId}`);

		dispatcher.dispatch({
			type: actionTypes.LOAD_CARD,
			payload: card.data
		});
	} catch (error) {
		let cardIdMatch = { data: {} };
		let totalOfCards = await axios('/api/pokemon.json');
		let cardDetail = totalOfCards.data.cards.find((word) =>
			word.id.includes(cardId)
		);
		cardIdMatch.data.card = cardDetail;

		dispatcher.dispatch({
			type: actionTypes.LOAD_CARD,
			payload: cardIdMatch.data
		});
	}
}

export async function loadDecks() {
	const decks = await axios('/api/decks.json');

	dispatcher.dispatch({
		type: actionTypes.LOAD_DECKS,
		payload: decks.data
	});
}

export async function loadList(cardName) {
	try {
		const cardList = await axios(
			`https://api.pokemontcg.io/v1/cards?name=${cardName}`
		);

		dispatcher.dispatch({
			type: actionTypes.LOAD_LIST,
			payload: cardList.data
		});
	} catch (error) {
		let listByName = { data: { cards: [] } };
		let totalOfCards = await axios('/api/pokemon.json');
		let cardsByName = totalOfCards.data.cards.filter((pokemonData) => {
			let pokemonName = pokemonData.name.toLowerCase();
			return pokemonName.includes(cardName.toLowerCase());
		});
		listByName.data.cards = cardsByName;

		dispatcher.dispatch({
			type: actionTypes.LOAD_LIST,
			payload: listByName.data
		});
	}
}

export function removeCard(cardId) {
	dispatcher.dispatch({
		type: actionTypes.REMOVE_CARD,
		payload: cardId
	});
}
