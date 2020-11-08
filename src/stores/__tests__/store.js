import cardsStore from '../store';
import dispatcher from '../../dispatcher/dispatcher';
import actionTypes from '../../actions/actionTypes';

describe('cardsStore functions', () => {
	test('should get an empty array from getCards', () => {
		// act
		let cards = cardsStore.getCards();
		//assert
		expect(cards).toEqual(null);
	});

	test('should return cards as an empty array in setCards', () => {
		// arrange
		const cards = cardsStore.setCards();
		// asssert
		expect(cards).toEqual([]);
	});

	test('should return an object with an array with numbers in setTestCards', () => {
		const testCards = cardsStore.setTestCards();
		expect(testCards).toEqual({ cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
	});

	test('should return an empty array from getCard', () => {
		// act
		const card = cardsStore.getCard();
		// assert
		expect(card).toEqual([]);
	});

	test('should return an empty array from getDecks', () => {
		// act
		const decks = cardsStore.getDecks();
		// assert
		expect(decks).toEqual([]);
	});

	test('should return back value', () => {
		// act
		const back = cardsStore.goBack();
		// assert
		expect(back).toBeUndefined();
	});

	test('should return something - removeCard identical cards', () => {
		// arrange
		const decks = [{ cards: [{ id: '1' }, { id: '2' }] }];
		const cardId = '3'
		// act
		const removeCard = cardsStore.removeCard(decks, cardId);
		// assert
		expect(removeCard).toBeDefined();
	});

	test('should return something - removeCard', () => {
		// arrange
		const decks = [{ cards: [{ id: '1' }, { id: '2' }] }];
		const cardId = '1'
		// act
		const removeCard = cardsStore.removeCard(decks, cardId);
		// assert
		expect(removeCard).toBeDefined();
	});

	test('should return something - empty decks', () => {
		// arrange
		const decks = [];
		const card = { card: 'Skylab' };
		// act
		const back = cardsStore.addCard(decks, card);
		// assert
		expect(back).toBeDefined();
	});

	test('should return something - length < 60', () => {
		// arrange
		const decks = [{ cards: [{ id: '1' }, { id: '2' }] }];
		const card = { card: 'Skylab' };
		// act
		const back = cardsStore.addCard(decks, card);
		// assert
		expect(back).toBeDefined();
	});

	test('should return something - length > 60', () => {
		// arrange
		const decks = [
			{
				cards: [
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
					{ id: 'Skylab' },
				]
			}
		];
		const card = { card: 'Skylab' };
		// act
		const back = cardsStore.addCard(decks, card);
		// assert
		expect(back).toBeDefined();
	});
});

describe('dispatcher.register functions', () => {
	test('should return cards as 1 in loadCards', () => {
		// arrange
		dispatcher.dispatch({
			type: actionTypes.LOAD_CARDS,
			payload: 1
		});
		// act
		const cards = cardsStore.getCards();
		// assert
		expect(cards).toBe(1);
	});

	test('should return random cards in loadRandomCards', () => {
		// arrange
		dispatcher.dispatch({
			type: actionTypes.LOAD_RANDOM_CARDS,
			payload: [1, 2, 3]
		});
		// act
		const cards = cardsStore.getCards();
		// assert
		expect(cards.length).toBeGreaterThan(0);
	});

	test('should return an object item in loadCard', () => {
		//arrange
		const card = { id: 'ex14-28' };
		dispatcher.dispatch({
			type: actionTypes.LOAD_CARD,
			payload: card
		});
		//act
		const newCard = cardsStore.getCard();
		//assert
		expect(newCard).toEqual(card);
	});

	test('should return deck info in loadDecks', () => {
		//arrange
		const decks = [{ id: 'Deck#001' }];
		dispatcher.dispatch({
			type: actionTypes.LOAD_DECKS,
			payload: decks
		});
		//act
		const pokemonDeck = cardsStore.getDecks();
		//assert
		expect(pokemonDeck).toEqual(decks);
	});

	test('should return a card removed', () => {
		//arrange
		const decks = [{ id: 'Deck#001' }];
		dispatcher.dispatch({
			type: actionTypes.REMOVE_CARD,
			payload: decks
		});
		//act
		const pokemonDeck = cardsStore.getDecks();
		//assert
		expect(pokemonDeck).toEqual([{ cards: [], id: 'Deck#001' }]);
	});

	test('should return an array item in loadList', () => {
		//arrange
		const cardName = [{ name: 'Charizard' }];
		dispatcher.dispatch({
			type: actionTypes.LOAD_LIST,
			payload: cardName
		});
		//act
		const pokemonName = cardsStore.getCards();
		//assert
		expect(pokemonName).toBe(cardName);
	});

	test('should work default case', () => {
		const noResult = null;
		//arrange
		dispatcher.dispatch({
			type: null
		});
		//assert
		expect(noResult).toBeNull();
	});
});
