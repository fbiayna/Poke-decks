import React from 'react';
import TypeStatistics from '../Statistics/TypesStatistics';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('TypeStatistics', () => {
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
			let cards = [{ supertype: 'Pokémon', subtype: 'Basic' }];
			render(
				<BrowserRouter>
					<TypeStatistics cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-ok')).toBeDefined();
	});

	test('should have text - ok', () => {
		act(() => {
			
			render(
				<BrowserRouter>
					<TypeStatistics />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-warning')).toBeDefined();
	});
});