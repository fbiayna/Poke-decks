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
		let threeRandomCardsToShow = [];
		let totalOfCards = await axios('/api/pokemon.json');
		for (let i = 0; i < 3; i++) {
			let randomCard = Math.floor(Math.random() * totalOfCards.cards.length);
			threeRandomCardsToShow.push(totalOfCards.cards[randomCard]);
		}

		dispatcher.dispatch({
			type: actionTypes.LOAD_CARDS,
			payload: threeRandomCardsToShow
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
		let fiftyRandomCardsToShow = [];
		let totalOfCards = await axios('/api/pokemon.json');
		for (let i = 0; i < 50; i++) {
			let randomCard = Math.floor(Math.random() * totalOfCards.cards.length);
			fiftyRandomCardsToShow.push(totalOfCards.cards[randomCard]);
		}

		dispatcher.dispatch({
			type: actionTypes.LOAD_RANDOM_CARDS,
			payload: fiftyRandomCardsToShow
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
		let totalOfCards = await axios('/api/pokemon.json');
		let cardDetail = totalOfCards.cards.filter((word) =>
			word.id.includes(cardId)
		);

		dispatcher.dispatch({
			type: actionTypes.LOAD_CARD,
			payload: cardDetail
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
		let totalOfCards = await axios('/api/pokemon.json');
		let cardsByName = totalOfCards.cards.filter((word) =>
			word.name.toLowerCase().includes(cardName)
		);

		dispatcher.dispatch({
			type: actionTypes.LOAD_LIST,
			payload: cardsByName
		});
	}
}

export async function loadCollection() {
	debugger;
	let cardCollection = [];
	let cardCollectionRequest;

	for (let index = 1; index < 14; index++) {
		cardCollectionRequest = await axios(
			`https://api.pokemontcg.io/v1/cards?page=${index}&pageSize=1000`
		);
		cardCollection[index - 1] = cardCollectionRequest.data.cards;
	}

	let totalOfCards = cardCollection.flat();

	dispatcher.dispatch({
		type: actionTypes.LOAD_COLLECTION,
		payload: totalOfCards
	});
}
