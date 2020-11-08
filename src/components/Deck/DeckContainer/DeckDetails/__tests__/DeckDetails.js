import React from 'react';
import DeckDetails from '../../DeckDetails/DeckDetails';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('DeckDetails', () => {
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
					<DeckDetails />
				</BrowserRouter>,
				container
            );
		});
		expect(document.getElementsByClassName('decks__section')[0]).toBeDefined();
	});
});