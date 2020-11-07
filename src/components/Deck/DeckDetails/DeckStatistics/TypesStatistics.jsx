import React from 'react';

function TypeStatistics({ cards }) {
	let totalTypes = cards?.filter(
		(card) => card.subtype === 'Basic' && card.supertype === 'Pokémon'
	).length;

	return (
		<>
			{totalTypes < 1 ? (
				<span className="statistic wrong">
					You have {totalTypes} basic pokemons and you must have at least 1
				</span>
			) : null}
			{totalTypes >= 1 ? (
				<span className="statistic ok">
					You have {totalTypes} basic pokemons!
				</span>
			) : null}
		</>
	);
}

export default TypeStatistics;
