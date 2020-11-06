import React from 'react';

function Retreats({ retreats }) {
	return (
		<>
			{retreats ? (
				<p>
					<div className="pokemon__retreat">
						<span className="pokemon-card__title">Retreat Cost</span>
						<div className="pokemon-element__icons">
							<p className="pokemon-card__text">
								{retreats.map((retreat) => (
									<i className={`energy ${retreat}`}></i>
								))}
							</p>
						</div>
					</div>
				</p>
			) : null}
		</>
	);
}

export default Retreats;
