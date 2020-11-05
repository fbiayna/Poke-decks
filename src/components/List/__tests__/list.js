import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import List from '../List';
import { render, unmountComponentAtNode } from 'react-dom';

describe('List', () => {
	let container;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should have a search-input container', () => {
		act(() => {
			const location = {
				search: 'cardId'
			};
			render(
				<BrowserRouter>
					<List location={location} />
				</BrowserRouter>,
				container
			);
		});
		expect(
			container.getElementsByClassName('search-container')[0].innerHTML
		).toBe(
			'<input type="text" name="searchBar" id="searchBar" placeholder="search for a card">'
		);
	});

	test('should have a card-gallery', () => {
		act(() => {
			const location = {
				search: 'cardId'
			};
			render(
				<BrowserRouter>
					<List location={location} />
				</BrowserRouter>,
				container
			);
		});
		expect(
			document.getElementsByClassName('card-gallery')[0].children.length
		).toBe(0);
	});

	test('should be defined', () => {
		act(() => {
			const location = {
				search: 'cardId'
			};
			render(
				<BrowserRouter>
					<List location={location} />
				</BrowserRouter>,
				container
			);
		});
		expect(
			document.getElementsByClassName('card-gallery')[0]).toBeDefined();
	});
});
