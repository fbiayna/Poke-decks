import React from 'react';
import Weaks from '../Weaks';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('weaks', () => {
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

	test('to be defined - weaks exists', () => {
		act(() => {
			const weaks = ['weaks']

			render(
				<BrowserRouter>
					<Weaks weaks={weaks} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon__weakness')[0]
		).toBeDefined();
    });
    
	test('to be defined - no weaks', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Weaks />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon__weakness')[0]
		).toBe(undefined);
	});
});