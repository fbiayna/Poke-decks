import React from 'react';

function EvolutionStatistics({ decks }) {
    let totalEvolutions = decks[0]?.cards?.filter((card) => card.subtype === 'Stage 1').length;
    return (
        <>
            {totalEvolutions && <p>{totalEvolutions}</p>}
        </>
    );
}

export default EvolutionStatistics;