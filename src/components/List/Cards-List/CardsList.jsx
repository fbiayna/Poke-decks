import React from 'react';
import { Link } from 'react-router-dom';

function CardsList({ cards }) {
	return (
		<>
			<ul className="card-gallery">
				{cards?.map((card) => (
					<li>
						<Link to={`/detail/${card.id}`}>
							<div class="pokemonCard__container">
								<img
									src={card.imageUrl}
									alt={card.id}
									className="pokemonCard__image"
								/>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default CardsList;
