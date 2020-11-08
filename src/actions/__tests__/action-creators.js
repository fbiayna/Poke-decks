import axios from 'axios';
import {
	loadCards,
	loadRandomCards,
	loadCard,
	loadDecks,
	loadList,
	removeCard
} from '../action-creators';
import actionTypes from '../actionTypes';
import dispatcher from '../../dispatcher/dispatcher';

jest.mock('axios');
jest.mock('../../dispatcher/dispatcher');

describe('action-creators', () => {
	describe('loadCards', () => {
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
			await loadCards();
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: actionTypes.LOAD_CARDS,
				payload: []
			});
		});

		test('shold call dispatch just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('should call axios with cards API', () => {
			expect(axios.mock.calls[0][0]).toMatch(
				'https://api.pokemontcg.io/v1/cards?page='
			);
		});

		test('should call axios just once', () => {
			expect(axios.mock.calls.length).toBe(1);
		});
	});

	describe('loadCards promise rejected', () => {
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.reject());
			axios.mockImplementationOnce(() =>
				Promise.resolve({ data: { cards: [1] } })
			);
			await loadCards();
		});

		test('should call dispatch on rejected promise', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload.cards.length).toBe(3);
		});
	});

	describe('loadRandomCards', () => {
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
			await loadRandomCards();
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: actionTypes.LOAD_RANDOM_CARDS,
				payload: []
			});
		});

		test('should call dispatch just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('should call axios with randomCards API', () => {
			expect(axios.mock.calls[0][0]).toMatch(
				'https://api.pokemontcg.io/v1/cards?page='
			);
		});

		test('should call axios just once', () => {
			expect(axios.mock.calls.length).toBe(1);
		});
	});

	describe('loadRandomCards promise rejected', () => {
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.reject());
			axios.mockImplementationOnce(() =>
				Promise.resolve({ data: { cards: [] } })
			);
			await loadRandomCards();
		});

		test('should call dispatch on rejected promise', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload.cards.length).toBe(
				50
			);
		});
	});

	describe('loadCard', () => {
		const cardId = 'ex14-28';
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
			await loadCard(cardId);
		});

		test('should call dispatcher', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: actionTypes.LOAD_CARD,
				payload: []
			});
		});

		test('should call dispatcher just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('should call axios with loadCard api', () => {
			expect(axios.mock.calls[0][0]).toEqual(
				`https://api.pokemontcg.io/v1/cards/${cardId}`
			);
		});

		test('should call axios just once', () => {
			expect(axios.mock.calls.length).toBe(1);
		});
	});

	describe('loadCard promise rejected', () => {
		const cardId = 'ex14-28';
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.reject());
			axios.mockImplementationOnce(() =>
				Promise.resolve({ data: { cards: [{ id: cardId }] } })
			);
			await loadCard(cardId);
		});

		test('should call dispatcher on rejected promise', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual({
				card: { id: 'ex14-28' }
			});
		});
	});

	describe('loadDecks', () => {
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
			await loadDecks();
		});

		test('should call dispatcher', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: actionTypes.LOAD_DECKS,
				payload: []
			});
		});

		test('should call dispatcher just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('should call axios with loadDecks api', () => {
			expect(axios.mock.calls[0][0]).toEqual('/api/decks.json');
		});

		test('should call axios just once', () => {
			expect(axios.mock.calls.length).toBe(1);
		});
	});

	describe('loadList', () => {
		const cardName = 'charizard';
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
			await loadList(cardName);
		});

		test('should call dispatcher', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: actionTypes.LOAD_LIST,
				payload: []
			});
		});

		test('should call axios with list api', () => {
			expect(axios.mock.calls[0][0]).toEqual(
				`https://api.pokemontcg.io/v1/cards?name=${cardName}`
			);
		});

		test('should call axios just once', () => {
			expect(axios.mock.calls.length).toBe(1);
		});
	});

	describe('loadList promise rejected', () => {
		const cardName = 'charizard';
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.reject());
			axios.mockImplementationOnce(() =>
				Promise.resolve({ data: { cards: [{ name: 'Charizard' }] } })
			);
			await loadList(cardName);
		});

		test('should call dispatcher on rejected promise', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual({
				cards: [{ name: 'Charizard' }]
			});
		});
	});

	describe('removeCard', () => {
		const cardId = 'ex14-28';

		beforeEach(() => {
			removeCard(cardId);
		});

		test('should call dispatcher', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: actionTypes.REMOVE_CARD,
				payload: cardId
			});
		});
	});
});
