import React from 'react';
import EnergyStatistics from '../Statistics/EnergyStatistics';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('EnergyStatistics', () => {
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
			let cards = [{ supertype: 'Energy' }];
			render(
				<BrowserRouter>
					<EnergyStatistics cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-warning')).toBeDefined();
	});

	test('should have text - too much', () => {
		act(() => {
			let cards = [
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' }
			];
			render(
				<BrowserRouter>
					<EnergyStatistics cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-toomuch')).toBeDefined();
	});

	test('should have text - ok', () => {
		act(() => {
			let cards = [
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
				{ supertype: 'Energy' },
			];
			render(
				<BrowserRouter>
					<EnergyStatistics cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-ok')).toBeDefined();
	});
});
