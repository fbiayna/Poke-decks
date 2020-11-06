import React from 'react';

function Attacks({attacks}) {
	return (
		<>
			{attacks
				? attacks.map((attack) => (
						<div className="pokemon-card__description">
							<p className="pokemon-card__title">
								{attack.cost.map((energy) => (
									<i className={`energy ${energy}`}></i>
								))}
								&nbsp;{attack.name}
								{attack.damage ? ` | ${attack.damage}` : null}
							</p>
							<p className="pokemon-card__text">{attack.text}</p>
						</div>
				  ))
				: null}
		</>
	);
}

export default Attacks
