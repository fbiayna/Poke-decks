import React, { useEffect, useState } from 'react';
import authStore from '../../stores/auth-store';
import DeckDetails from './DeckDetails/DeckDetails';
import DeckCards from './DeckCards/DeckCards';
import './Deck.css'
import Login from '../Login/Login';

function Decks() {

    const [user, setUser] = useState(authStore.getUser());

    function handleChange() {
        setUser(authStore.getUser());
    }

    useEffect(() => {
        authStore.addEventListener(handleChange);

        return () => authStore.removeEventListener(handleChange);
    }, [user]);

    return (user ? (
        <div div className="deck" >
            <DeckDetails />
            <DeckCards />
        </div>
    ) : (
            <div div className="deck" >
                <Login />
            </div>
        )
    );
}

export default Decks;