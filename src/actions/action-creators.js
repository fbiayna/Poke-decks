import axios from 'axios';
import actionTypes from './actionTypes';
import dispatcher from '../dispatcher/dispatcher';

export async function loadCards() {

	let randomPage = Math.floor(Math.random()*3000)

	const cards = await axios(`https://api.pokemontcg.io/v1/cards?page=${randomPage}&pageSize=3`);

	dispatcher.dispatch({
		type: actionTypes.LOAD_CARDS,
		payload: cards.data
	});
}

export async function loadRandomCards() {

	let randomPage = Math.floor(Math.random()*250)

	const cards = await axios(`https://api.pokemontcg.io/v1/cards?page=${randomPage}&pageSize=50`);

	dispatcher.dispatch({
		type: actionTypes.LOAD_RANDOM_CARDS,
		payload: cards.data
	});
}

export async function loadCard(cardId) {
	const card = await axios(`https://api.pokemontcg.io/v1/cards/${cardId}`);

	dispatcher.dispatch({
		type: actionTypes.LOAD_CARD,
		payload: card.data
	});
}

export async function loadDecks() {
	const decks = await axios('/api/decks.json');

	dispatcher.dispatch({
		type: actionTypes.LOAD_DECKS,
		payload: decks.data
	});
}

export async function loadList(cardName) {
	const cardList = await axios(`https://api.pokemontcg.io/v1/cards?name=${cardName}`);

	dispatcher.dispatch({
		type: actionTypes.LOAD_LIST,
		payload: cardList.data
	});
}

export async function loadCollection() {
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
