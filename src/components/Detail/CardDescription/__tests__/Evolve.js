import React from 'react';
import Evolve from '../Evolve';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Evolve', () => {
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

	test('to be defined - evolve exists', () => {
		act(() => {
			const evolve = 'evolve'

			render(
				<BrowserRouter>
					<Evolve evolve={evolve} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-evolve__container')[0]
		).toBeDefined();
    });
    
	test('to be defined - no ability', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Evolve />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-evolve__container')[0]
		).toBe(undefined);
	});
});