import React from 'react';
import Detail from '../Detail';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import store from '../../../stores/store';

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

	test('should have content', () => {
        
		act(() => {
        
			const match = {
				params: {
					cardId: 'someCardId'
				}
            };
            
            const card = {
                card: {
                    text: ['ugygu']
                }
            }

			render(
				<BrowserRouter>
					<Detail card={card} match={match} />
				</BrowserRouter>,
				container
			);
        });
        
		expect(
			document.getElementsByClassName('detailcard-container')[0].children.length
		).toBeGreaterThan(0);
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
			document.getElementsByClassName('detailcard-container')[0]).toBeDefined();
    });
});
