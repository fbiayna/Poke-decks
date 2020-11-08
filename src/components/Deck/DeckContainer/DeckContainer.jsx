import React from 'react';
import DeckDetails from './DeckDetails/DeckDetails';
import DeckCards from './DeckCards/DeckCards';
import '../Deck.css';
import Login from '../../Login/Login';

function DeckContainer({ user }) {
	return (
		<>
			{user ? (
				<div id="deck-container" className="deck">
					<DeckDetails />
					<DeckCards />
				</div>
			) : (
				<div id="deck-container" className="deck">
					<Login />
				</div>
			)}
		</>
	);
}

export default DeckContainer;
