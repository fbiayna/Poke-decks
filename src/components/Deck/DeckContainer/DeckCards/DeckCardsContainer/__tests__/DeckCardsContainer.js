import React from 'react';
import DeckCardsContainer from '../DeckCardsContainer';
import * as actions from '../../../../../../actions/action-creators'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock('../../../../../../actions/action-creators');

describe('DeckCardsContainer', () => {
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

            const decks=[{cards:[{id:"1",imageUrlHires:"Skylab.png"}]}]

			render(
				<BrowserRouter>
					<DeckCardsContainer decks={decks}/>
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('decks__card-section')[0]
		).toBeDefined();
	});

	test('llama a la función removeCard cuando se hace click', () => {

        const decks=[{cards:[{id:"1",imageUrlHires:"Skylab.png"}]}]

		act(() => {
			render(
				<BrowserRouter>
					<DeckCardsContainer decks={decks}/>
				</BrowserRouter>,
				container
			);
		});
		
		const button = document.getElementById('remove-button');

		act(() => {
			button.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});

		expect(actions.removeCard).toHaveBeenCalled();
	});

});