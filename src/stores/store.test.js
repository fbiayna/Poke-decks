import cardsStore from './store';
import actionTypes from '../actions/actiontypes';

describe('cardsStore functions', () => {
    test('should get an empty array from getCards', () => {
        // act
        let cards = cardsStore.getCards();
        //assert
        expect(cards).toEqual([]);
    });
    test('should return null from an empty cards array geRandomCards', () => {
        // act
        let cards = cardsStore.getRandomCards();
        // assert 
        expect(cards).toBe(null);
    })

    test('should return a three item array from a 5 item array getRandomCards', () => {
        // act
        cardsStore.setTestCards();
        cardsStore.setTestRandomAmount();
        const finalCards = cardsStore.getRandomCards();
        // assert
        expect(finalCards.length).toBe(3);
    });

    test('should return null from getCard', () => {
        // act
        const card = cardsStore.getCard();
        // assert
        expect(card).toBe(null);
    });

    test('should return an empty array from getDecks', () => {
        // act
        const decks = cardsStore.getDecks();
        // assert
        expect(decks).toEqual([]);
    })
});