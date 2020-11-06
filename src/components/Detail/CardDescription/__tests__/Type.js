import React from 'react';
import Type from '../Type';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('type', () => {
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

	test('to be defined - type exists', () => {
		act(() => {
			const type = ['type']

			render(
				<BrowserRouter>
					<Type type={type} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementById("poke-type")
		).toBeDefined();
    });
    
	test('to be defined - no type', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Type />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementById("poke-type")
		).toBe(null);
	});
});