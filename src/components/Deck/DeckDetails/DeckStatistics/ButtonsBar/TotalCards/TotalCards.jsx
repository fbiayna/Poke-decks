import React from 'react';

function TotalCards(cards) {
    debugger;
    return (
        <div className="decks__section__block__deck__add-cards__total-cards">
            {cards ? <span id="length-true">{cards.cards?.length}/60 CARDS</span> : <span id="length-false" >0/60 CARDS</span>}
        </div>
    );
}

export default TotalCards;