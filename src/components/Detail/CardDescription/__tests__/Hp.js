import React from 'react';
import Hp from '../Hp';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('hp', () => {
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

	test('to be defined - hp exists', () => {
		act(() => {
			const hp = '10'

			render(
				<BrowserRouter>
					<Hp hp={hp} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBeDefined();
    });
    
	test('to be defined - no hp', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Hp />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBe(undefined);
	});
});