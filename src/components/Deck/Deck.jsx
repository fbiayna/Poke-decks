import React, { useEffect, useState } from 'react';
import authStore from '../../stores/auth-store';
import DeckContainer from '../Deck/DeckContainer/DeckContainer';
import './Deck.css';

function Decks() {
	const [user, setUser] = useState(authStore.getUser());

	function handleChange() {
		setUser(authStore.getUser());
	}

	useEffect(() => {
		authStore.addEventListener(handleChange);

		return () => authStore.removeEventListener(handleChange);
	}, [user]);

	return <DeckContainer user={user} />;
}

export default Decks;
