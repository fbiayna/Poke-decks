import axios from 'axios';
import { loadCards, loadRandomCards, loadCard, loadDecks, loadList } from '../action-creators';
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
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.LOAD_CARDS, payload: [] });
        });
        
        test('shold call dispatch just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with cards API', () => {
            // assert
            expect(axios.mock.calls[0][0]).toEqual('https://api.pokemontcg.io/v1/cards?page=1&pageSize=500');
        });
        
        test('should call axios just once', () => {
            expect(axios.mock.calls.length).toBe(1);
        });
    });

    describe('loadRandomCards', () => {
        beforeEach(async () => {
            axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
            await loadRandomCards();
        });

        test('should call dispatch', () => {
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.LOAD_RANDOM_CARDS, payload: [] });
        });

        test('should call dispatch just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with randomCards API', () => {
            expect(axios.mock.calls[0][0]).toBe('https://api.pokemontcg.io/v1/cards?page=1&pageSize=50');
        });
    
        test('should call axios just once', () => {
            expect(axios.mock.calls.length).toBe(1);
        });

    })

    describe('loadCard', () => {
        const cardId = "ex14-28";
        beforeEach(async () => {
            axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
            await loadCard(cardId);
        });

        test('should call dispatcher', () => {
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.LOAD_CARD, payload: []});
        });

        test('should call dispatcher just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with loadCard api', () => {
            expect(axios.mock.calls[0][0]).toEqual(`https://api.pokemontcg.io/v1/cards/${cardId}`);
        });

        test('should call axios just once', () => {
            expect(axios.mock.calls.length).toBe(1);
        })

    });

    describe('loadDecks', () => {
        beforeEach(async () => {
            axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
            await loadDecks();
        });

        test('should call dispatcher', () => {
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.LOAD_DECKS, payload: [] });
        });

        test('should call dispatcher just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with loadDecks api', () => {
            expect(axios.mock.calls[0][0]).toEqual('api/decks.json');
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
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.LOAD_LIST, payload: [] });
        });

        test('should call axios with list api', () => {
            expect(axios.mock.calls[0][0]).toEqual(`https://api.pokemontcg.io/v1/cards?name=${cardName}`);
        });

        test('should call axios just once', () => {
            expect(axios.mock.calls.length).toBe(1);
        });
    });

});
