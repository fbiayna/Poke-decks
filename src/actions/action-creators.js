import actionTypes from './actiontypes';
import dispatcher from '../dispatcher/dispatcher';

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
