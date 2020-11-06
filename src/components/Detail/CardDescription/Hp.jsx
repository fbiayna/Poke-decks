import React from 'react';

function Hp({hp}) {
    return(<>
        {hp ? <p className="pokemon-card__text">{hp} HP</p> :null}
    </>)
}

export default Hp