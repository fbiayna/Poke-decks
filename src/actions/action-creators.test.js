import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
import { loadCards } from '../actions/action-creators';
import actionTypes from './actiontypes';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('action-creators', () => {
    describe('loadCards', () => {
        beforeEach(async () => {
            axios.mockImplementationOnce(() =>  Promise.resolve({ data: [] }));
            await loadCards();
        });

        test('should call dispatch', () => {
          expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.loadCards, payload: [] });
        });
        
        test('shold call dispatch just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        });

        test('should call axios with cards API', async () => {
            // arrange
            const idpage = 1;
            const sizepage = 500;
            const response = await fetch(`https://api.pokemontcg.io/v1/cards?page=${idpage}&pageSize=${sizepage}`);
            const cards = await response.json();
            // assert
            expect(axios.mock.calls[0][0]).toEqual(cards);
        })

    });
})