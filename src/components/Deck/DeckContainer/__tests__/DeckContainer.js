import React from 'react';
import DeckContainer from '../DeckContainer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('DeckContainer', () => {
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

	test('to be defined - DeckContainer - user exists', () => {
		act(() => {
            const user='Skylab'

			render(
				<BrowserRouter>
					<DeckContainer user={user}/>
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementById('deck-container')
		).toBeDefined();
    });
    
	test('to be defined - DeckContainer - no user', () => {
		act(() => {

			render(
				<BrowserRouter>
					<DeckContainer />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementById('deck-container')
		).toBeDefined();
	});

});