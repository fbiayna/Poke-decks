import React from 'react';
import CardSearchLanding from '../CardSearchLanding';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import store from '../../../../../stores/store';

describe('CardSearchLanding', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		let cardsMock = [
			{
				id: 'pl3-93',
				name: 'Bulbasaur',
				imageUrl: 'https://images.pokemontcg.io/pl3/93_hires.png'
			},
			{
				id: 'pl3-93',
				name: 'Squirtle',
				imageUrl: 'https://images.pokemontcg.io/pl3/93_hires.png'
			},
			{
				id: 'pl3-93',
				name: 'Charmander',
				imageUrl: 'https://images.pokemontcg.io/pl3/93_hires.png'
			}
		];
		store.setCardsCorrectly(cardsMock);
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
					<CardSearchLanding />
				</BrowserRouter>,
				container
			);
		});
		expect(container.getElementsByClassName('images__title')[0].innerHTML).toBe(
			"<h2>SEARCH BY CARDS</h2><p>Do you need information about any card?<br>Find it with Poke-Decks' search tool!</p>"
		);
	});

	test('should have an image', () => {
		act(() => {
			render(
				<BrowserRouter>
					<CardSearchLanding />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('images__cards')[0].children.length
		).toBe(1);
	});

	test('should have a div with a button', () => {
		act(() => {
			render(
				<BrowserRouter>
					<CardSearchLanding />
				</BrowserRouter>,
				container
			);
		});
		expect(
			container.getElementsByClassName('images__button-search')[0].innerHTML
		).toBe(
			'<a id=\"images__button-search-button\" href=\"/cards\"><button id=\"button-search__cards-home\"><span class=\"material-icons\">recent_actors</span>&nbsp;<span>Find Cards</span></button></a>'
		);
	});
});
