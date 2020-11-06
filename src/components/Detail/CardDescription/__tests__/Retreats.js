import React from 'react';
import Retreats from '../Retreats';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('retreats', () => {
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

	test('to be defined - retreats exists', () => {
		act(() => {
			const retreats = [
                'retreatCost'
            ]

			render(
				<BrowserRouter>
					<Retreats retreats={retreats} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon__retreat')[0]
		).toBeDefined();
    });
    
	test('to be defined - no retreats', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Retreats />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon__retreat')[0]
		).toBe(undefined);
	});
});