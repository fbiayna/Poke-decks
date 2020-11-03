import cardsStore from './store';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actiontypes';

describe('cardsStore functions', () => {
    test('should get an empty array from getCards', () => {
        // act
        let cards = cardsStore.getCards();
        //assert
        expect(cards).toEqual([]);
    });
    
    test('should return cards as an empty array in setCards', () => {
        // arrange
        const cards = cardsStore.setCards();
        // asssert
        expect(cards).toEqual([]);
    })

    test('should return an object with an array with numbers in setTestCards', () => {
        const testCards = cardsStore.setTestCards();
        expect(testCards).toEqual({ cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
    })

    test('should return number 7 in setTestRandomAmount', () => {
        const randomAmount = cardsStore.setTestRandomAmount();
        expect(randomAmount).toBe(7);
    })

    test('should get null if cards is an empty array in getRandomCards', () => {
        // act
        cardsStore.setCards();
        const randomCards = cardsStore.getRandomCards();
        // assert
        expect(randomCards).toBe(null);
    });

    test('should return a three item array from a 5 item array getRandomCards', () => {
        // act
        cardsStore.setTestCards();
        cardsStore.setTestRandomAmount();
        const finalCards = cardsStore.getRandomCards();
        // assert
        expect(finalCards.length).toBe(3);
    });

    test('should return an empty array from getCard', () => {
        // act
        const card = cardsStore.getCard();
        // assert
        expect(card).toEqual([]);
    });

    test('should return an empty array from getDecks', () => {
        // act
        const decks = cardsStore.getDecks();
        // assert
        expect(decks).toEqual([]);
    });
});

describe('dispatcher.register functions', () => {
    
    test('should return cards as 1 in loadCards', () => {
        // arrange
        dispatcher.dispatch({
            type: actionTypes.loadCards,
            payload: 1
        });
        // act
        const cards = cardsStore.getCards();
        // assert
        expect(cards).toBe(1);
    });

    test('should return a three item array from loadRandomCards', () => {
        // arrange
        dispatcher.dispatch({
            type: actionTypes.loadRandomCards,
            payload: { cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
        });
        // act
        const randomCard = cardsStore.getRandomCards();
        // assert
        expect(randomCard.length).toBe(3);
    })
});