import React from 'react';
import Rules from '../Rules';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('rules', () => {
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

	test('to be defined - rules exists', () => {
		act(() => {
			const rules = ['rules']

			render(
				<BrowserRouter>
					<Rules rules={rules} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__description')[0]
		).toBeDefined();
    });
    
	test('to be defined - no rules', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Rules />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon-card__description')[0]
		).toBe(undefined);
	});
});