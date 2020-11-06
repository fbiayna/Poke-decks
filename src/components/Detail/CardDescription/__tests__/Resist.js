import React from 'react';
import Resist from '../Resist';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('resist', () => {
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

	test('to be defined - resist exists', () => {
		act(() => {
			const resistances = [{
                value: 'resist',
                type: 'resist'
            }]

			render(
				<BrowserRouter>
					<Resist resistances={resistances} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon__resistance')[0]
		).toBeDefined();
    });
    
	test('to be defined - no resist', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Resist />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('pokemon__resistance')[0]
		).toBe(undefined);
	});
});
