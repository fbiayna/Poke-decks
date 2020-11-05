import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import { render, unmountComponentAtNode } from 'react-dom';
describe('Header', () => {
	let container;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
	test('should have a h1 title', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('h1').textContent).toBe(
			'Pokémon TCG - Deck Masters'
		);
	});
	test('should have a h2 title', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
				container
			);
		});
		expect(container.getElementsByClassName('title__body')[1].textContent).toBe(
			'Deck Masters - Header'
		);
	});
	test('should have a logo', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('logo__pokeball').src).toBe(
			'https://www.flaticon.es/svg/static/icons/svg/743/743977.svg'
		);
	});
	test('should have a Link', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
				container
			);
		});
		expect(
			document.getElementsByClassName('header__links')[3].innerHTML
		).toEqual('<span>TUTORIAL</span>');
	});
});