import React from 'react';
import Landing from '../Landing';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Landing', () => {
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

	test('should have the landing compos', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Landing />
				</BrowserRouter>,
				container
            );
		});
		expect(document.getElementsByClassName('landing-container__all-elements')[0].children.length).toBeGreaterThan(0);
	});

});