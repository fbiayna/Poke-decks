import React from 'react';
import SuperType from '../SuperType';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

describe('supertype', () => {
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

	test('to be defined - supertype exists', () => {
		act(() => {
			const types = {
                subType: 'subType',
                superType: 'Pokémon'
            }

			render(
				<BrowserRouter>
					<SuperType types={types} />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementById('poke-subtype')[0]
		).toBe(undefined);
    });
    
	test('to be defined - no supertype', () => {
		act(() => {
            const types = {
                subType: 'subType',
                superType: 'superType'
            }
			render(
				<BrowserRouter>
					<SuperType types={types}/>
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementById('poke-supertype')
		).toBeDefined();
	});
});