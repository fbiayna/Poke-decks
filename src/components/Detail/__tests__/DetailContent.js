import React from 'react';
import DetailContent from '../DetailContent';
import cardsStore from '../../../stores/store';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock('../../../stores/store');

describe('DetailContent', () => {
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

	test('to be defined', () => {
		act(() => {
			const card = null;
			const decks = null;

			render(
				<BrowserRouter>
					<DetailContent card={card} decks={decks} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('detailcard-container__image-block')[0]
		).toBeDefined();
	});

	test('llama a la función back cuando se hace click', () => {
		const card = null;
		const decks = null;

		act(() => {
			render(
				<BrowserRouter>
					<DetailContent card={card} decks={decks} />
				</BrowserRouter>,
				container
			);
		});

		const button = document.getElementById('button-back');

		act(() => {
			button.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});

		expect(cardsStore.goBack).toHaveBeenCalled();
	});

	test('llama a la función add card cuando se hace click', () => {
		const card = null;
		const decks = null;

		act(() => {
			render(
				<BrowserRouter>
					<DetailContent card={card} decks={decks} />
				</BrowserRouter>,
				container
			);
		});

		const button = document.getElementById('button-add__card');

		act(() => {
			button.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});

		expect(cardsStore.addCard).toHaveBeenCalled();
	});
});
