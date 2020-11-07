import React from 'react'
import AddCards from './AddCards/AddCards';

function ButtonsBar({cards}) {
    return (
        <div className="decks__section__block deck__add-cards">
        <AddCards />
        <div className="decks__section__block__deck__add-cards__total-cards">
                {cards? <span id="length-true">{cards.length}/60 CARDS</span>:<span id="length-false" >0/60 CARDS</span>}
        </div>
    </div>

    )
}

export default ButtonsBar;