import React from 'react';

function Rules({ rules }) {
	return (
		<>
			{Array.isArray(rules) ? (
				<div className="pokemon-card__description">
					<p className="pokemon-card__title">Rules</p>
					<p className="pokemon-card__text">{rules}</p>
				</div>
			) : null}
		</>
	);
}

export default Rules;
