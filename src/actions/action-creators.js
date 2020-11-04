import axios from 'axios';
import actionTypes from './actionTypes';
import dispatcher from '../dispatcher/dispatcher';

export async function loadCards() {
	const cards = await axios('https://api.pokemontcg.io/v1/cards?page=1&pageSize=500');

	dispatcher.dispatch({
		type: actionTypes.loadCards,
		payload: cards.data
	});
}

export async function loadRandomCards() {
	const cards = await axios('https://api.pokemontcg.io/v1/cards?page=1&pageSize=1000');

	dispatcher.dispatch({
		type: actionTypes.loadRandomCards,
		payload: cards.data
	});
}

export async function loadCard(cardId) {
	const card = await axios(`https://api.pokemontcg.io/v1/cards/${cardId}`);

	dispatcher.dispatch({
		type: actionTypes.loadCard,
		payload: card.data
	});
}

export async function loadDecks() {
	const decks = await axios('api/decks.json');

	dispatcher.dispatch({
		type: actionTypes.loadDecks,
		payload: decks.data
	});
}

export async function loadList(cardName) {
	const cardList = await axios(`https://api.pokemontcg.io/v1/cards?name=${cardName}`);

	dispatcher.dispatch({
		type: actionTypes.loadList,
		payload: cardList.data
	});
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
		type: actionTypes.loadCollection,
		payload: totalOfCards

	});
}
