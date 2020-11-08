import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../../../../actions/action-creators';

function DeckCardsContainer({ decks }) {
	return (
		<>
			<div className="decks__card-section">
				{(!decks || !decks.length) && (
					<h1>You have no cards... add some to start playing!</h1>
				)}
				{decks &&
					decks.length > 0 &&
					decks[0]?.cards.map((card) => {
						return (
							<div className="deckCard__wrapper">
								<Link to={`/detail/${card.id}`}>
									<div class="deckCard__wrapper__container">
										<img
											src={card.imageUrlHiRes}
											alt={card.id}
											className="deckCard__image"
										/>
									</div>
								</Link>
								<div
                                    id="remove-button"
									className="deckard__wrapper__remove-button"
									onClick={() => actions.removeCard(card.id)}
								>
									<span>Remove</span>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
}

export default DeckCardsContainer;
