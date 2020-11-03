import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
import { loadCards, loadRandomCards, loadCard, loadDecks } from '../actions/action-creators';
import actionTypes from './actiontypes';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('action-creators', () => {
    describe('loadCards', () => {
        beforeEach(async () => {
            axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
            await loadCards();
        });

        test('should call dispatch', () => {
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.loadCards, payload: [] });
        });
        
        test('shold call dispatch just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with cards API', async () => {
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
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.loadRandomCards, payload: [] });
        });

        test('should call dispatch just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with randomCards API', async () => {
            expect(axios.mock.calls[0][0]).toEqual('https://api.pokemontcg.io/v1/cards?page=1&pageSize=1000');
        });
    
        test('should call axios just once', () => {
            expect(axios.mock.calls.length).toBe(1);
        });

    })

    describe('loadCard', () => {
        beforeEach(async () => {
            axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
            await loadCard("ex14-28");
        });

        test('should call dispatcher', () => {
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.loadCard, payload: []});
        });

        test('should call dispatcher just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with loadCard api', () => {
            expect(axios.mock.calls[0][0]).toEqual(`https://api.pokemontcg.io/v1/cards/ex14-28`);
        });

        test('should call axios just once', () => {
            expect(axios.mock.calls.length).toBe(1);
        })

    });

});