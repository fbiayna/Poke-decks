import React from 'react';
import { Link } from 'react-router-dom';

function Evolve({ evolve }) {
	return (
		<>
			{evolve ? (
				<p className="pokemon-evolve__container">
					<span className="pokemon-card__title">Evolves from</span>
					<Link
						className="pokemon-card__text"
						id="pokemon_evolve"
						to={`../cards/?name=${evolve}`}
					>
						<button id="button-evolve">{evolve}</button>
					</Link>
				</p>
			) : null}
		</>
	);
}

export default Evolve;
