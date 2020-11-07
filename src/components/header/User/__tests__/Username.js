import React from 'react';
import Username from '../Username';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Username', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('to be defined - Username exists', () => {
		act(() => {
			const user = {
                displayName: 'Skylab Coders',
			};

			render(
				<BrowserRouter>
					<Username user={user} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('desktop-header__login')[0]
		).toBeDefined();
    });
    
});
