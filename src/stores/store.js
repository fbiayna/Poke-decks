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

	removeCard(decks, cardId) {
		let newDeck = [];
		let identicalCards = 0;
		decks[0].cards?.map((card) => {
			if (card.id !== cardId || identicalCards > 0) {
				newDeck.push(card);
			} else {
				identicalCards++;
			}
		});
		decks[0].cards = newDeck;
		return decks;
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

	goBack() {
		return window.history.back();
	}

	addCard(decks, card) {
		return (
			<>
				{decks?.length > 0
					? decks[0].cards.length < 60
						? decks[0].cards.push(card.card) && alert('Added!')
						: alert('Your deck is full, check it and make some space!')
					: alert('There are no decks... Create one first!')}
			</>
		);
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

		case actionTypes.REMOVE_CARD:
			_decks = cardsStore.removeCard(_decks, action.payload);
			cardsStore.emitChange();
			break;

		case actionTypes.LOAD_LIST:
			cards = action.payload;
			cardsStore.emitChange();
			break;

		default:
			break;
	}
});

export default cardsStore;
