import React from 'react';
import Ability from '../Ability';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Ability', () => {
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

	test('to be defined - ability exists', () => {
		act(() => {
			const ability = {
                name: 'ability',
                text: 'ability'
			};

			render(
				<BrowserRouter>
					<Ability ability={ability} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__description')[0]
		).toBeDefined();
    });
    
	test('to be defined - no ability', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Ability />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__description')[0]
		).toBe(undefined);
	});
});
