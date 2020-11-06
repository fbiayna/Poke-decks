import React from 'react';

function Rarity({ rarity }) {
	return (
		<>
			{rarity ? (
				<p className="pokemon-card__text  pokemon-evolve__container">
					<span className="pokemon-card__title">Rarity</span>
					{rarity}
				</p>
			) : null}
		</>
	);
}

export default Rarity;
