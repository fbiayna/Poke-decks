import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actiontypes';

const change = 'change';
let cards = [];
let card;
let _decks = [];

class CardsStore extends EventEmitter {
	getCards() {
		return cards;
	}

	getRandomCards() {
		debugger;
		let random = Math.floor(Math.random() * 496);
		let randomCards = this.getCards().cards.slice(random, random + 3);
		debugger;
		return randomCards;
	}

	getCard() {
		return card;
	}

	getDecks() {
		return _decks;
	}

	addEventListener(callback) {
		this.on(change, callback);
	}

	removeEventListener(callback) {
		this.removeListener(change, callback);
	}

	emitChange() {
		this.emit(change);
	}
}

const cardsStore = new CardsStore();

dispatcher.register((action) => {
	debugger;
	switch (action.type) {
		case actionTypes.loadCards:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.loadRandomCards:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.loadCard:
			card = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.loadDecks:
			debugger;
			_decks = action.payload;
			cardsStore.emitChange();
			break;

		default:
			break;
	}
});

export default cardsStore;
