import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Social from '../Social';
import videos from '../video/videos';


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

    test('Social container should contain the opacity div', () => {
        act(() => {
            render(
                 <>
                    <Social />
                </>,
                container
            );
        });
        expect(document.getElementsByClassName('opacity')).toBeDefined();
    });

    videos.map((video) =>
        test('Social container should create 4 video elements', () => {
            act(() => {
                render(
                     <>
                        <Social />
                    </>,
                    container
                );
            });
            expect(document.getElementById(`${video.title}`)).toBeDefined();
        })
    );
    
    videos.map((video) =>
        test('Each video element should have a title', () => {
            act(() => {
                render(
                    <>
                        <Social />
                    </>,
                    container
                );
            });
            expect(document.getElementById(`${video.title}-title`)).toBeDefined();
        })
    );

    videos.map((video) =>
        test('Each video element should contain an anchor', () => {
            act(() => {
                render(
                    <>
                        <Social />
                    </>,
                    container
                );
            });
            expect(document.getElementsByClassName('landing__container__social__anchor')).toBeDefined();
        })
    );

});