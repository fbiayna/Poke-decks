import React from 'react';

function TotalCards({cards}) {
    return (
        <div className="decks__section__block__deck__add-cards__total-cards">
            {cards ?
                <div className="totalCards-button">
                    <span id="length-true">{cards?.length}/60 CARDS</span>
                    <div className="total-cards__pokedex"/>
                </div>
                :
                <span id="length-false" >0/60 CARDS</span>}
        </div>
        
    );
}

export default TotalCards;