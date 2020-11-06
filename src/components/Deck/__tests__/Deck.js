import React from 'react';
import Deck from '../Deck';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Deck', () => {
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
					<Deck />
				</BrowserRouter>,
				container
            );
		});
		expect(document.getElementsByClassName('deck')[0]).toBeDefined();
	});

});