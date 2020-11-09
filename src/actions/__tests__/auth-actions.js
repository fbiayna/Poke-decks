import axios from 'axios';
import dispatcher from '../../dispatcher/dispatcher';
import {
	handleSignIn,
	handleError,
	signInWithGoogle,
	signOut
} from '../auth-actions';
import '../firebase/firebaseIndex';
import actionTypes from '../actionTypes';

jest.mock('axios');
jest.mock('../../dispatcher/dispatcher');
jest.mock('firebase');

describe('auth-actions', () => {
	describe('handleSignIn', () => {
		const user = {
			displayName: 'Skylab Coders',
			email: 'Skylab',
			phoneNumber: 'Skylab',
			photoURL: 'Skylab'
		};
		beforeEach(() => {
			handleSignIn(user);
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: actionTypes.AUTH_LOGIN,
				payload: {
					displayName: user.displayName,
					email: user.email,
					phoneNumber: user.phoneNumber,
					photoURL: user.photoURL
				}
			});
		});

		test('shold call dispatch just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});
	});

	describe('handleError', () => {
		const type = actionTypes.AUTH_LOGIN_ERROR;
		beforeEach(() => {
			handleError(type);
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type
			});
		});

		test('shold call dispatch just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});
	});

	describe('SignOut - Error', () => {
		const type = actionTypes.AUTH_SIGNOUT_ERROR;
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.rejected({ data: [] }));
			await signOut();
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type
			});
		});

		test('shold call dispatch just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

	
	});

	describe('SignIn - Error', () => {
		const type = actionTypes.AUTH_LOGIN_ERROR;
		beforeEach(async () => {
			axios.mockImplementationOnce(() => Promise.rejected({ data: [] }));
			await signInWithGoogle();
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type
			});
		});

		test('shold call dispatch just once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

	
	});

});
