import React from 'react';
import DeckCards from '../DeckCards';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('DeckCards', () => {
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

	test('should have the landing compos', () => {
		act(() => {
			render(
				<BrowserRouter>
					<DeckCards />
				</BrowserRouter>,
				container
            );
		});
		expect(document.getElementsByClassName('decks__card-section')[0]).toBeDefined();
	});

});