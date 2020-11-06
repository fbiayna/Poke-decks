import React from 'react';

function Ability({ ability }) {
	return (
		<>
			{ability ? (
				<div className="pokemon-card__description">
					<p className="pokemon-card__title">{ability.name}</p>
					<p className="pokemon-card__text">{ability.text}</p>
				</div>
			) : null}
		</>
	);
}

export default Ability;
