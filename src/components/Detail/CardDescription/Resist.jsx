import React from 'react';

function Resist({ resistances }) {
	return (
		<>
			{resistances ? (
				<p>
					<div className="pokemon__resistance">
						<span className="pokemon-card__title">Resistances</span>
						<div className="pokemon-element__icons">
							{resistances.map((resist) => (
								<p className="pokemon-card__text">
									<i className={`energy ${resist.type}`}></i>
									<span>{resist.value}</span>
								</p>
							))}
						</div>
					</div>
				</p>
			) : null}
		</>
	);
}

export default Resist;
