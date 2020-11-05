import React from 'react';
import CardsSection from '../CardsSection';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('CardsSection', () => {
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

	test('should have a title', () => {
		act(() => {
			render(
				<BrowserRouter>
					<CardsSection />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementsByClassName('landing__cards-section')[0].children.length).toBeGreaterThan(0);
	});

	test('should to be defined', () => {
		act(() => {
			render(
				<BrowserRouter>
					<CardsSection />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementsByClassName('landing__cards-section')[0]).toBeDefined();
	});
});
