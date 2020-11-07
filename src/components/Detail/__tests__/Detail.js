import React from 'react';
import Detail from '../Detail';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Detail', () => {
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

	test('to be defined', () => {
		act(() => {
			const match = {
				params: {
					cardId: 'someCardId'
				}
			};

			render(
				<BrowserRouter>
					<Detail match={match} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('detailcard-container')[0]
		).toBeDefined();
	});

});
