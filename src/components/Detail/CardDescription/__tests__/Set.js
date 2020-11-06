import React from 'react';
import Set from '../Set';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('set', () => {
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

	test('to be defined - set exists', () => {
		act(() => {
			const set = 'set'

			render(
				<BrowserRouter>
					<Set set={set} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBeDefined();
    });
    
	test('to be defined - no set', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Set />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__text')[0]
		).toBe(undefined);
	});
});