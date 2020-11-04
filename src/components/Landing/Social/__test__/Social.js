import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Social from '../Social';


describe('Social tests', () => {
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

    test.only('Social container should contain the opacity div', () => {
        act(() => {
            render(
                 <>
                    <Social />
                 </>
            );
        });
        expect(container.getElementsByClassName('landing__container__social')[0].textContent).toContain('<div className="opacity"></div>');
    });

});