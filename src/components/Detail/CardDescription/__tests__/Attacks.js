import React from 'react';
import Attacks from '../Attacks';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Attacks', () => {
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

	test('to be defined - attacks exists', () => {
		act(() => {
			const attacks = [{
				name: 'attack',
                text: 'attack',
                damage: '20',
                cost: ['energy']
			}]

			render(
				<BrowserRouter>
					<Attacks attacks={attacks} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__description')[0]
		).toBeDefined();
	});
	
	test('to be defined - attacks exists but no damage', () => {
		act(() => {
			const attacks = [{
				name: 'attack',
                text: 'attack',
                cost: ['energy']
			}]

			render(
				<BrowserRouter>
					<Attacks attacks={attacks} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__title')[0]
		).toBeDefined();
    });
    
	test('to be defined - no ability', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Attacks />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__description')[0]
		).toBe(undefined);
	});
});
