import React from 'react';
import TotalCards from '../../ButtonsBar/TotalCards/TotalCards';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('TotalCards', () => {
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

	test('should have text - warning', () => {
		act(() => {
			let cards = [{ supertype: 'Energy' }];
			render(
				<BrowserRouter>
					<TotalCards cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('length-true')).toBeDefined();
	});

	test('should have text - ok', () => {
		act(() => {
			render(
				<BrowserRouter>
					<TotalCards />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('length-false')).toBeDefined();
	});
});