import actionTypes from './actiontypes';
import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';

let idpage = 1;
let sizepage = 500;

export async function loadCards() {
	const response = await fetch(
		`https://api.pokemontcg.io/v1/cards?page=${idpage}&pageSize=${sizepage}`
	);
	const cards = await response.json();

	dispatcher.dispatch({
		type: actionTypes.loadCards,
		payload: cards
	});
}

export async function loadRandomCards() {
	const response = await fetch(
		`https://api.pokemontcg.io/v1/cards?page=1&pageSize=1000`
	);
	const cards = await response.json();

	dispatcher.dispatch({
		type: actionTypes.loadRandomCards,
		payload: cards
	});
}

export async function loadCard(cardId) {
	const response = await fetch(`https://api.pokemontcg.io/v1/cards/${cardId}`);
	const card = await response.json();

	dispatcher.dispatch({
		type: actionTypes.loadCard,
		payload: card
	});
}

export async function loadDecks() {
	const response = await fetch('api/decks.json');
	const decks = await response.json();
	dispatcher.dispatch({
		type: actionTypes.loadDecks,
		payload: decks
	});
}

export async function loadList(cardName) {
	const response = await fetch(
		`https://api.pokemontcg.io/v1/cards?name=${cardName}`
	);
	const cardList = await response.json();

	dispatcher.dispatch({
		type: actionTypes.loadList,
		payload: cardList.cards
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
