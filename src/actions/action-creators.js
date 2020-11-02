import actionTypes from './actiontypes';
import dispatcher from '../dispatcher/dispatcher';
import decks from '../components/Decks/data/decks.json';

let idpage = 1;
let sizepage = 500;

export async function loadCards() {
	const response = await fetch(`https://api.pokemontcg.io/v1/cards?page=${idpage}&pageSize=${sizepage}`);
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

export function loadDecks() {
	
	const userDecks = decks;

	dispatcher.dispatch({
		type: actionTypes.loadDecks,
		payload: userDecks
	})

}

export async function loadList() {
	debugger;
	const response = await fetch(`https://api.pokemontcg.io/v1/cards`);
	const cardList = await response.json();

	dispatcher.dispatch({
		type: actionTypes.loadList,
		payload: cardList
	});
}
