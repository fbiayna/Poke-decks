import React from 'react';
import NotFound from '../NotFound';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('NotFound', () => {
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

	test('to be defined - NotFound exists', () => {
		act(() => {

			render(
				<BrowserRouter>
					<NotFound />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('landing-not-found')[0]
		).toBeDefined();
    });
    
});
