import axios from 'axio';
import dispatcher from '../dispatcher/dispatcher';
import { loadCards } from '../actions/action-creators';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('action-creators', () => {
    describe('loadCards', () => {
        beforeEach(async () => {
            axios.mockImplementationOnce(() => { Promise.resolve({ data: [] }) });
            await loadCards();
        });

        test('should call dispatch', () => {
            expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: 'load_cards', payload: [] });
        });
        
        test('shold call dispatch just once', () => {
            expect(dispatcher.dispatch.mock.calls.length).toBe(1);
        })

    });
})