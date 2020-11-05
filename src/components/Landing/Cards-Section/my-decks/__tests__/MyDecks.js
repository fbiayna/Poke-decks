import React from 'react';
import MyDecks from '../MyDecks';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import store from '../../../../../stores/store';

describe('MyDecks', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		let decks = [
			{
				title: 'Deck 1',
				url: './decks',
				imagealt: 'https://images.pokemontcg.io/pl3/93_hires.png'
			},
		];
		store.setCardsCorrectly(decks);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should have a title', () => {
		act(() => {
			render(
				<BrowserRouter>
					<MyDecks />
				</BrowserRouter>,
				container
			);
		});
		expect(container.getElementsByClassName('images__title')[0].innerHTML).toBe(
			"<h2>MY DECKS</h2><p>It's time to create!<br>Customize decks whatever you want</p>"
		);
	});

	test('should have an image', () => {
		act(() => {
			render(
				<BrowserRouter>
					<MyDecks />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('images__cards')[0].children.length
		).toBeGreaterThan(0);
	});

	test('should have a div with a button', () => {
		act(() => {
			render(
				<BrowserRouter>
					<MyDecks />
				</BrowserRouter>,
				container
			);
		});
		expect(
			container.getElementsByClassName('images__button-search')[0].innerHTML
		).toBe(
			'<a href="/my-decks"><button id="button-search__cards-home">Create decks</button></a>'
		);
	});
});
