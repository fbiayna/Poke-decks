import actionTypes from './actiontypes';
import dispatcher from '../dispatcher/dispatcher';

export async function loadCards () {
    const response = await fetch('https://api.pokemontcg.io/v1/cards?page=1&pageSize=10')
    const cards = await response.json();

    dispatcher.dispatch({
        type: actionTypes.loadCards,
        payload: cards,
    })
}