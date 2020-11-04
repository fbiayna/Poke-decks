import React from 'react';
import Footer from '../Footer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Footer', () => {
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

	test('should have info about us', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Footer />
				</BrowserRouter>,
				container
            );
		});
		expect(document.getElementsByClassName('footer-container')[0].children.length).toBeGreaterThan(0);
	});

});