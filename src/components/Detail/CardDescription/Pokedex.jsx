import React from 'react';

function Pokedex({ pokedex }) {
	return (
		<>
			{pokedex ? (
				<p className="pokemon-card__text pokemon-evolve__container">
					<span className="pokemon-card__title">Pokédex Number</span>#{pokedex}
				</p>
			) : null}
		</>
	);
}

export default Pokedex;
