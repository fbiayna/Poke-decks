import React from 'react';
import Pokedex from '../Pokedex';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('pokedex', () => {
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

	test('to be defined - pokedex exists', () => {
		act(() => {
			const pokedex = '10'

			render(
				<BrowserRouter>
					<Pokedex pokedex={pokedex} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBeDefined();
    });
    
	test('to be defined - no pokedex', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Pokedex />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBe(undefined);
	});
});