import React from 'react';
import PokemonStatistics from '../Statistics/PokemonStatistics';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('PokemonStatistics', () => {
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
			let cards = [{ supertype: 'Pokémon' }];
			render(
				<BrowserRouter>
					<PokemonStatistics cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-warning')).toBeDefined();
	});

	test('should have text - too much', () => {
		act(() => {
			let cards = [
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' }
			];
			render(
				<BrowserRouter>
					<PokemonStatistics cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-toomuch')).toBeDefined();
	});

	test('should have text - ok', () => {
		act(() => {
			let cards = [
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' },
				{ supertype: 'Pokémon' }
			];
			render(
				<BrowserRouter>
					<PokemonStatistics cards={cards} />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('stat-ok')).toBeDefined();
	});
});
