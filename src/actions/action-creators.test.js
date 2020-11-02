import axios from 'axio';
import dispatcher from '../dispatcher/dispatcher';
import { loadCards } from '../actions/action-creators';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('action-creators', () => {
    describe('loadCards', () => {
        beforeEach(async () => {
            axios.mockImplementationOnce(() => {Promise.resolve({ data: [] })})
        })
    })
})