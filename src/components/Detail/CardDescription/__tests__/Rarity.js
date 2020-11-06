import React from 'react';
import Rarity from '../Rarity';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('rarity', () => {
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

	test('to be defined - rarity exists', () => {
		act(() => {
			const rarity = 'rarity'

			render(
				<BrowserRouter>
					<Rarity rarity={rarity} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBeDefined();
    });
    
	test('to be defined - no rarity', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Rarity />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBe(undefined);
	});
});