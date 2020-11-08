import React from 'react';
import MyDeckBlock from '../MyDeckBlock';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('MyDeckBlock', () => {
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

	test('to be defined - MyDeckBlock - user exists', () => {
		act(() => {
            const decks = [{title:"Skylab"}]
            const user='Skylab'

			render(
				<BrowserRouter>
					<MyDeckBlock props={{decks:decks, user:user}}/>
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementById('image__cards-deck')
		).toBeDefined();
	});

});