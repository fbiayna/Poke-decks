import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actionTypes';

const change = 'change';
let cards = null;
let card = [];
let _decks = [];

class CardsStore extends EventEmitter {
	getCards() {
		return cards;
	}

	getDecks() {
		return _decks;
	}

	setCards() {
		return (cards = []);
	}

	setCardsCorrectly(value) {
		cards = value;
	}

	setTestCards() {
		return (cards = { cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
	}

	getCard() {
		return card;
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
	switch (action.type) {
		case actionTypes.LOAD_CARDS:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.LOAD_RANDOM_CARDS:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.LOAD_CARD:
			card = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.LOAD_DECKS:
			_decks = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.LOAD_LIST:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.LOAD_COLLECTION:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		default:
			break;
	}
});

export default cardsStore;
