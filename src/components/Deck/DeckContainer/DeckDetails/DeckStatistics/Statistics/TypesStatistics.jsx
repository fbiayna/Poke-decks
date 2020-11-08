import React from 'react';

function TypeStatistics({ cards }) {
	let totalTypes = cards?.filter(
		(card) => card.subtype === 'Basic' && card.supertype === 'Pokémon'
	).length;

	return (
		<>
			{totalTypes < 1 ? (
				<div className="statistics__row">
					<div className="stateIcon wrongIcon"></div>
					<span id="stat-warning" className="statistic wrong">
						You have {totalTypes} basic pokemons and you must have at least 1
					</span>
				</div>
			) : null}
			{totalTypes >= 1 ? (
				<div className="statistics__row">
					<div className="stateIcon okIcon"></div>
					<span id="stat-ok" className="statistic ok">
						You have {totalTypes} basic pokemons!
					</span>
				</div>
			) : null}
		</>
	);
}

export default TypeStatistics;
