import React from 'react';

function Statistics({ cards }) {
	let totalPokemon = cards?.filter((card) => card.supertype === 'Pokémon')
		.length;

	return (
		<>
			{totalPokemon < 20 ? (
				<span className="statistic warning">
					You have {totalPokemon} pokemons and we recommend to have at least 20
				</span>
			) : null}
			{totalPokemon > 38 ? (
				<span className="statistic warning">
					You have {totalPokemon} pokemons and we recommend to have maximum 38
				</span>
			) : null}
			{totalPokemon >= 20 && totalPokemon <= 38 ? (
				<span className="statistic ok">You have {totalPokemon} pokemons!</span>
			) : null}
		</>
	);
}

export default Statistics;
