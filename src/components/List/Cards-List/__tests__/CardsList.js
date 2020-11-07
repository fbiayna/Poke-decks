import React from 'react';
import CardsList from '../CardsList';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('cardList', () => {
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

	test('to be defined - cardList exists', () => {
		act(() => {
			const cards = [{
				id: 'id',
                imageUrl: 'pokemon.png',
			}]

			render(
				<BrowserRouter>
					<CardsList cards={cards} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('card-gallery')
		).toBeDefined();
	});

});