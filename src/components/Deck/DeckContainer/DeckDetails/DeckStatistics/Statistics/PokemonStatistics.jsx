import React from 'react';
import TypesStatistics from './TypesStatistics';

function PokemonStatistics({ cards }) {
	let totalPokemon = cards?.filter((card) => card.supertype === 'Pokémon').length;
	return (
			<div className="statistics__category" id="statistic__category__pokemon">
				<div className="statistics__category__name">
					<h2 className="statistics__category-title">Pokemons</h2>
					<div className="statistics__category-icon"></div>
				</div>
				{totalPokemon < 20 ? (
					<div className="statistics__row">
						<div className="stateIcon warningIcon"></div>
						<span id="stat-warning" className="statistic warning">
							You have {totalPokemon} pokemons and we recommend to have at least 20
						</span>
					</div>
				) : null}
				{totalPokemon > 38 ? (
					<div className="statistics__row">
						<div className="stateIcon warningIcon"></div>
						<span id="stat-toomuch" className="statistic warning">
							You have {totalPokemon} pokemons and we recommend to have maximum 38
						</span>
					</div>
				) : null}
				{totalPokemon >= 20 && totalPokemon <= 38 ? (
					<div className="statistics__row">
						<div className="stateIcon okIcon"></div>
						<span id="stat-ok" className="statistic ok">You have {totalPokemon} pokemons!</span>
					</div>
				) : null}
				<TypesStatistics cards={cards}/>
			</div>
	);
}

export default PokemonStatistics;
