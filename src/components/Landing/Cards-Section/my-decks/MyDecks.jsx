import React, { useEffect, useState } from 'react';
import { loadDecks } from '../../../../actions/action-creators';
import authStore from '../../../../stores/auth-store';
import cardsStore from '../../../../stores/store';
import MyDeckBlock from './MyDeckBlock/MyDeckBlock';
import './MyDecks.css';

function MyDecks() {
	const [decks, setDecks] = useState(cardsStore.getDecks());
	const [user, setUser] = useState(authStore.getUser());

	function handleChange() {
		setDecks(cardsStore.getDecks());
		setUser(authStore.getUser());
	}

	useEffect(() => {
		cardsStore.addEventListener(handleChange);
		authStore.addEventListener(handleChange);

		if (!decks || decks.length < 1) {
			loadDecks();
		}

		return () => {
			cardsStore.removeEventListener(handleChange);
			authStore.removeEventListener(handleChange);
		};
	}, [decks, user]);

	return <MyDeckBlock props={{ user: user, decks: decks }} />;
}

export default MyDecks;
