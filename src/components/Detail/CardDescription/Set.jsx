import React from 'react';

function Set({ set }) {
	return (
		<>
			{set ? (
				<p className="pokemon-card__text pokemon-evolve__container">
					<span className="pokemon-card__title">Set</span>
					{set}
				</p>
			) : null}
		</>
	);
}

export default Set;
