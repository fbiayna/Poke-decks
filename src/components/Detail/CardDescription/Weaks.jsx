import React from 'react';

function Weaks({ weaks }) {
	return (
		<>
			{weaks ? (
				<p>
					<div className="pokemon__weakness">
						<span className="pokemon-card__title">Weakness</span>
						<div className="pokemon-element__icons">
							{weaks.map((weak) => (
								<p className="pokemon-card__text">
									<i className={`energy ${weak.type}`}></i>
									<span>{weak.value}</span>
								</p>
							))}
						</div>
					</div>
				</p>
			) : null}
		</>
	);
}

export default Weaks;
