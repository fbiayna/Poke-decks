import authStore from '../auth-store';
import dispatcher from '../../dispatcher/dispatcher';
import actionTypes from '../../actions/actionTypes';

describe('dispatcher.register functions', () => {

	test('should return user login', () => {
		// arrange
		dispatcher.dispatch({
			type: actionTypes.AUTH_LOGIN,
			payload: 1
		});
		// act
		const user = authStore.getUser();
		// assert
		expect(user).toBe(1);
    });

	test('should return user signout', () => {
		// arrange
		dispatcher.dispatch({
			type: actionTypes.AUTH_SIGNOUT,
			payload: null
		});
		// act
		const user = authStore.getUser();
		// assert
		expect(user).toBe(null);
    });

	test('should return user auth login error', () => {
		// arrange
		dispatcher.dispatch({
			type: actionTypes.AUTH_LOGIN_ERROR,
			payload: null
		});
		// act
		const user = authStore.getUser();
		// assert
		expect(user).toBe(null);
    });
    
});
