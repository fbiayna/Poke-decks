import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actiontypes';

const change = 'change';
let cards = [];
let card = [];
let _decks = [];
let randomAmount = 996;

class CardsStore extends EventEmitter {
	getCards() {
		return cards;
	}

	setTestCards() {
		return cards = { cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
	}

	setTestRandomAmount() {
		randomAmount = 7;
		return randomAmount;
	}

	getRandomCards() {
		let random = Math.ceil(Math.random() * randomAmount);
		let randomCards = cards.cards?.slice(random, random + 3) || null;	
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
			_decks = action.payload;
			cardsStore.emitChange();
			break;

		case actionTypes.loadList:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		default:
			break;
	}
});

export default cardsStore;
